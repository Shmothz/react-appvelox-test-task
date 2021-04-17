import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import profileReducer from './reducers/profile-reducer'
import appReducer from './reducers/app-reducer-'

let reducers = combineReducers ({
  profilePage: profileReducer,
  app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store

