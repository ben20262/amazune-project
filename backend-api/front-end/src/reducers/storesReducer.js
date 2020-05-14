export default function storesReducer(state = {all: [], loading: false}, action) {
	let item
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
		case 'CREATE_STORE':
			item = {
				name: action.store.name,
				content: action.store.content,
				id: action.store.id,
				userId: action.store.user_id
			}
			return {
				all: [...state.all, item],
				loading: false
			}
		case 'DELETE_STORE':
			return state
		default:
			return state
	}
}