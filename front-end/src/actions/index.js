const apiURL = 'http://localhost:3000'

export const fetchUsers = () => {
	return dispatch => {
		dispatch({type: 'LOADING_USERS'})
		fetch(`${apiURL}/users`)
		.then(resp => resp.json())
		.then(users => dispatch({ type: 'ADD_USERS', users }))
	}
}

export const fetchItems = () => {
	return dispatch => {
		dispatch({type: 'LOADING_ITEMS'})
		fetch(`${apiURL}/items`)
		.then(resp => resp.json())
		.then(items => dispatch({ type: 'ADD_ITEMS', items }))
	}
}

export const fetchStores = () => {
	return dispatch => {
		dispatch({type: 'LOADING_STORES'})
		fetch(`${apiURL}/stores`)
		.then(resp => resp.json())
		.then(stores => dispatch({ type: 'ADD_STORES', stores }))
	}
}

export const loginUser = userId => {
	return dispatch => {
		dispatch({type: 'LOADING_USER', userId})
		fetch(`${apiURL}/user/${action.userId}`)
		.then(resp => resp.json())
		.then(user => dispatch({ type: 'LOGIN_USER', user }))
	}
}

export const addToCart = (userId, itemId) => {
	return dispatch => {
		fetch(`${apiURL}/user/${userId}/items/${itemId}`)
		.then(resp => resp.json)
		.then(item => dispatch({ type: 'CART_ITEM', item}))
	}
}