import {loginAPI} from '../../api/api';

const SET_USER = 'auth/SET_USER'

let initialState = {
  data: {
    id: 1,
    login: 'testLogin',
    email: 'test-email@gmail.com'
  },
  isAuth: true
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
    return {
      ...state,
      data: action.data,
      isAuth: action.isAuth
    }
    default:
      return state
}}

export const auth = (id, login, email, isAuth) => ({type: SET_USER, data: {id, login, email}, isAuth})

export const getAccountTC = () => async (dispatch) => {
  const data = await loginAPI.me()
  if (data.resultCode === 0) {
    dispatch(auth(data.data.id, data.data.login, data.data.email, true))
  }
}