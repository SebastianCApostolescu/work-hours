import { combineReducers } from 'redux'

import auth from './authReducer'
import updateHours from './updateHours'

export default combineReducers({
  auth,
  updateHours
})
