export default function storesReducer(state = {all: [], loading: false}, action) {

	switch (action.type) {
		case 'LOADING_STORES':
			return {
				all: [...state.all],
				loading: true
			}
		case 'ADD_STORES':
			return {
				all: action.stores,
				loading: false
			}
		case 'DELETE_STORE':
			return state
		default:
			return state
	}
}