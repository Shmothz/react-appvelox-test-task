import {profileAPI} from '../../api/api';

const GET_USER_DATA = 'profile/GET_USER_DATA'
const GET_VISITS = 'profile/GET_VISITS'
const GET_MORE_VISITS = 'profile/GET_MORE_VISITS'
const SET_CANCEL_VISIT = 'profile/SET_CANCEL_VISIT'

type UserDataType = {
  userId: number | null
  fullName: string | null
  age: number | null
  description: string | null
  photos: string | null
}
type DoctorType = {
  fullName: string
  avatar: string
  specialty: string
}
type VisitType = {
  id: number 
  date: string
  hospitalName: string
  hospitalAddress: string
  doctor: DoctorType
}
type InitialStateType = {
  userData: UserDataType
  visits: Array<VisitType>
}

const initialState = {
  userData: {
    userId: 0,
    fullName: 'Ваше имя',
    age: 22,
    description: 'Немного о себе',
    photos: 'https://sun9-22.userapi.com/impg/vWCzJc4xHJ4pIR9jnEmu_jy2iGOQJBzdEZMg7g/lvYuydM9ZKU.jpg?size=845x280&quality=96&proxy=1&sign=23eda5f03474d4b130759a0f4629883e&type=album'
  },
  visits: [
    {
      id: 0,
      date: '2012-04-23T18:25:43.511Z',
      hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25"',
      hospitalAddress: 'пр. Солидарности, д. 1, к. 1, лит. А',
      doctor: {
        fullName: 'Малушко Т.Н.',
        avatar: 'https://i.pinimg.com/originals/04/3a/0d/043a0d88931ce037b081f1606ccbda09.jpg',
        specialty: 'Хирургия'
      }
    },
    {
      id: 1,
      date: '2019-01-25 14:06:00.000Z',
      hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25"',
      hospitalAddress: 'пр. Солидарности, д. 1, к. 1, лит. А',
      doctor: {
        fullName: 'Харьков В. С.',
        avatar: 'https://i.pinimg.com/originals/04/3a/0d/043a0d88931ce037b081f1606ccbda09.jpg',
        specialty: 'Терапевтическое отделение'
      }
    },
    {
      id: 2,
      date: '2019-01-25 14:06:00.000Z',
      hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25"',
      hospitalAddress: 'пр. Солидарности, д. 1, к. 1, лит. А',
      doctor: {
        fullName: 'Базаров Х.',
        avatar: 'https://i.pinimg.com/originals/04/3a/0d/043a0d88931ce037b081f1606ccbda09.jpg',
        specialty: 'Вышибала'
      }
    },
    {
      id: 3,
      date: '2019-01-25 14:06:00.000Z',
      hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25"',
      hospitalAddress: 'пр. Солидарности, д. 1, к. 1, лит. А',
      doctor: {
        fullName: 'Добротин В.У.',
        avatar: 'https://i.pinimg.com/originals/04/3a/0d/043a0d88931ce037b081f1606ccbda09.jpg',
        specialty: 'Урология'
      }
    },
    {
      id: 4,
      date: '2019-01-25 14:06:00.000Z',
      hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25"',
      hospitalAddress: 'пр. Солидарности, д. 1, к. 1, лит. А',
      doctor: {
        fullName: 'Добротин В.У.',
        avatar: 'https://i.pinimg.com/originals/04/3a/0d/043a0d88931ce037b081f1606ccbda09.jpg',
        specialty: 'Урология'
      }
    },
    {
      id: 5,
      date: '2019-01-25 14:06:00.000Z',
      hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25"',
      hospitalAddress: 'пр. Солидарности, д. 1, к. 1, лит. А',
      doctor: {
        fullName: 'Добротин В.У.',
        avatar: 'https://i.pinimg.com/originals/04/3a/0d/043a0d88931ce037b081f1606ccbda09.jpg',
        specialty: 'Ортопедия'
      }
    },
    {
      id: 6,
      date: '2019-01-25 14:06:00.000Z',
      hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25"',
      hospitalAddress: 'пр. Солидарности, д. 1, к. 1, лит. А',
      doctor: {
        fullName: 'Добротин В.У.',
        avatar: 'https://i.pinimg.com/originals/04/3a/0d/043a0d88931ce037b081f1606ccbda09.jpg',
        specialty: 'Урология'
      }
    },
    {
      id: 7,
      date: '2019-01-25 14:06:00.000Z',
      hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25"',
      hospitalAddress: 'пр. Солидарности, д. 1, к. 1, лит. А',
      doctor: {
        fullName: 'Добротин В.У.',
        avatar: 'https://i.pinimg.com/originals/04/3a/0d/043a0d88931ce037b081f1606ccbda09.jpg',
        specialty: 'Урология'
      }
    },
    {
      id: 8,
      date: '2019-01-25 14:06:00.000Z',
      hospitalName: 'СПБ ГБУЗ "Городская поликлиника №25"',
      hospitalAddress: 'пр. Солидарности, д. 1, к. 1, лит. А',
      doctor: {
        fullName: 'Добротин В.У.',
        avatar: 'https://i.pinimg.com/originals/04/3a/0d/043a0d88931ce037b081f1606ccbda09.jpg',
        specialty: 'Урология'
      }
    }
  ]
}

export const profileReducer = (state = initialState , action: any): InitialStateType => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        userData: action.userData
      }
    case GET_VISITS: // запрашиваем информацию о записи на прием
      return {
        ...state,
        visits: action.visits
      }
    case GET_MORE_VISITS: // в зависимости от API можно сделать подгрузку записей к врачу к уже существующим
      return {
        ...state,
        visits: [...state.visits, action.visits]
      }
    case SET_CANCEL_VISIT:
      return {
        ...state,
        visits: state.visits.splice(action.visitId, 1) // гениальное решение удаление элемента из массива
        // в теории сломаться не должно
      }
    default:
      return state
  }
}

type GetUserDataActionType = {
  type: typeof GET_USER_DATA
  userData: UserDataType
}
type GetVisitsActionType = {
  type: typeof GET_VISITS
  visits: Array<VisitType>
}
type GetMoreVisitsActionType = {
  type: typeof GET_MORE_VISITS
  visits: Array<VisitType>
}
type SetCancelVisitActionType = {
  type: typeof SET_CANCEL_VISIT
  visitId: number
}
const getUserDataAC = (userData: UserDataType): GetUserDataActionType => ({type: GET_USER_DATA, userData })
const getVisitsAC = (visits: Array<VisitType>): GetVisitsActionType => ({type: GET_VISITS, visits })
const getMoreVisitsAC = (visits: Array<VisitType>): GetMoreVisitsActionType => ({ type: GET_MORE_VISITS, visits })
const setCancelVisitAC = (visitId: number): SetCancelVisitActionType => ({ type: SET_CANCEL_VISIT, visitId })


export const getUserDataTC = (userId: number) => async (dispatch: any) => {
  const res = await profileAPI.getUserData(userId) // забираем с API-шки информацию о себе для дальнейшего использования
  dispatch(getUserDataAC(res.userData))
}
export const getVisitsTC = (userId: number) => async (dispatch: any) => {
  const res = await profileAPI.getVisits(userId) // подгружаем записи на прием для отображения
  dispatch(getVisitsAC(res.visits))
}
export const getMoreVisitsTC = (userId: number) => async (dispatch: any) => {
  const res = await profileAPI.getVisits((userId, 10)) //предполагаем , что больше 10 записей к врачу быть не может.
  dispatch(getMoreVisitsAC(res.visits)) // Возможно изменю данное число и подумаю как его сделать.
}
export const setCancelVisitTC = (visitId: number) => async (dispatch: any) => {
  const res = await profileAPI.setCancelVisit(visitId)
  if (res.resultCode === 0) { // всё делается под воображаемую API. на реальных примерах вложенность может отличаться
    dispatch(setCancelVisitAC(visitId))
  }
}