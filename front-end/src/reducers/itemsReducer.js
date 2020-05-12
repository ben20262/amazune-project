export default function rootReducer(state = {all: [], loading: false}, action) {

	switch (action.type) {
		case 'LOADING_ITEMS':
			return {
				all: [...state.all],
				loading: true
			}
		case 'ADD_ITEMS':
			return {
				all: action.items,
				loading: false
			}
		case 'DELETE_ITEM':
			return state
		default:
			return state
	}
}