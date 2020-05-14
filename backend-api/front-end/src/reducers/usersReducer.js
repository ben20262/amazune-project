export default function usersReducer(state = {all: [], current: {}, loading: false}, action) {
	let item
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
		case 'CREATE_USER':
			item = {
				name: action.user.name,
				id: action.user.id,
				storeId: action.user.storeId
			}
			return {
				...state,
				all: [...state.all, item],
				current: item,
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