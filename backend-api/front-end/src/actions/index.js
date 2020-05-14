const apiURL = 'http://localhost:3001'

const configObj = (action, info) => {
	return {
		method: action,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify(info)
	}
}

// ITEMS

export const fetchItems = () => {
	return dispatch => {
		dispatch({type: 'LOADING_ITEMS'})
		fetch(`${apiURL}/items`)
		.then(resp => resp.json())
		.then(items => dispatch({ type: 'ADD_ITEMS', items }))
	}
}

export const addItem = (name, content, price, store_id) => {
	return dispatch => {
		dispatch({type: 'LOADING_ITEMS'})
		fetch(`${apiURL}/stores/${store_id}/items`, configObj('POST', { name, content, price }))
		.then(resp => resp.json())
		.then(item => console.log(item))
	}
}

// STORES

export const fetchStores = () => {
	return dispatch => {
		dispatch({type: 'LOADING_STORES'})
		fetch(`${apiURL}/stores`)
		.then(resp => resp.json())
		.then(stores => dispatch({ type: 'ADD_STORES', stores }))
	}
}

export const addStore = newStore => {
	return dispatch => {
		dispatch({type: 'LOADING_STORES'})
		fetch(`${apiURL}/stores`, configObj('POST', newStore))
		.then(resp => resp.json())
		.then(store => dispatch({ type: 'CREATE_STORE', store }))
	}
}

// USERS

export const addUser = (name) => {
	return dispatch => {
		dispatch({type: 'LOADING_USERS'})
		fetch(`${apiURL}/users`, configObj('POST', {name}))
		.then(resp => resp.json())
		.then(user => dispatch({ type: 'CREATE_USER', user }))
	}
}

export const fetchUsers = () => {
	return dispatch => {
		dispatch({type: 'LOADING_USERS'})
		fetch(`${apiURL}/users`)
		.then(resp => resp.json())
		.then(users => dispatch({ type: 'ADD_USERS', users }))
	}
}

export const loginUser = userId => {
	return dispatch => {
		dispatch({type: 'LOADING_USERS'})
		fetch(`${apiURL}/users/${userId}`)
		.then(resp => resp.json())
		.then(user => dispatch({ type: 'LOGIN_USER', user }))
	}
}

export const addToCart = (userId, itemId) => {
	console.log(itemId)
	return dispatch => {
		dispatch({ type: 'LOADING_USERS'})
		fetch(`${apiURL}/users/${userId}`, configObj('PATCH', { itemId }))
		.then(resp => resp.json())
		.then(user => dispatch({ type: 'CART_ITEM', user}))
	}
}