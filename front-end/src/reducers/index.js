import { combineReducers } from 'redux'
import userReducer from './usersReducer'
import itemReducer from './itemsReducer'
import storeReducer from './storesReducer'

const rootReducer = combineReducers({
	users: usersReducer,
	items: itemsReducer,
	store: storesReducer
})

export default rootReducer