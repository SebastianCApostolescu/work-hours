import { combineReducers } from 'redux'

import auth from './authReducer'
import workLog from './updateHours'

export default combineReducers({
	auth,
	workLog
})
