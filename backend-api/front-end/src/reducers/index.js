import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import itemsReducer from './itemsReducer'
import storesReducer from './storesReducer'

const rootReducer = combineReducers({
	users: usersReducer,
	items: itemsReducer,
	stores: storesReducer
})

export default rootReducer