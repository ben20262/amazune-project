export default function usersReducer(state = {all: [], current: {}, loading: false}, action) {

	switch (action.type) {
		case 'LOADING_USERS':
			return {
				...state,
				all: [...state.all],
				loading: true
			}
		case 'ADD_USERS':
			return {
				...state,
				all: action.users,
				loading: false
			}
		case 'LOGIN_USER':
			return {
				...state,
				current: action.user
			}
		case 'CART_ITEM':
			return state
		default:
			return state
	}
}