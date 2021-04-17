import {profileAPI} from '../../api/api';

const GET_USER_DATA = 'profile/GET_USER_DATA'
const GET_VISITS = 'profile/GET_VISITS'
const SET_CANCEL_VISIT = 'profile/SET_CANCEL_VISIT'

const initialState = {
  userData: {
    userId: 1,
    fullName: 'Ваше имя',
    age: 22,
    description: 'Немного о себе'
  },
  visits: [
    {
      date: '2019-01-25 14:06:00.000Z',
      hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25"',
      hospitalAddress: 'пр. Солидарности, д. 1, к. 1, лит. А',
      doctor: {
        fullName: 'Малушко Т.Н.',
        avatar: 'https://i.pinimg.com/originals/04/3a/0d/043a0d88931ce037b081f1606ccbda09.jpg',
        specialty: 'Хирургия'
      }
    },
    {
      date: '2019-01-25 14:06:00.000Z',
      hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25"',
      hospitalAddress: 'пр. Солидарности, д. 1, к. 1, лит. А',
      doctor: {
        fullName: 'Харьков В. С.',
        avatar: 'https://i.pinimg.com/originals/04/3a/0d/043a0d88931ce037b081f1606ccbda09.jpg',
        specialty: 'Терапевтическое отделение'
      }
    }
  ]
}

export const profileReducer = (state = initialState , action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        userData: action.userData
      }
    case GET_VISITS:
      return {
        ...state
      }
    default:
      return state
  }
}

const getUserDataAC = (userData) => ({type: GET_USER_DATA, userData})

export const getUserDataTC = (userId) => async (dispatch) => {
  const res = await profileAPI.getUserData(userId)
  dispatch(getUserDataAC(res.userData))
}

