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
type DataType = {
  id: number | null
  login: string | null
  email: string | null
}
type InitialStateType = {
  data: DataType
  isAuth: boolean
}

export const authReducer = (state = initialState, action: any): InitialStateType => {
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

type AuthType = {
  type: typeof SET_USER
  data: DataType
  isAuth: boolean
}

export const auth = (id: number | null, login: string | null, email: string | null, isAuth: boolean):AuthType  => ({type: SET_USER, data: {id, login, email}, isAuth})

export const getAccountTC = () => async (dispatch: any) => {
  const data = await loginAPI.me()
  if (data.resultCode === 0) {
    dispatch(auth(data.data.id, data.data.login, data.data.email, true))
  }
}