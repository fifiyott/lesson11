import { combineReducers } from 'redux'
import userReducer from './userReducers'

export default combineReducers({
  usersList: userReducer
})