import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchItems, addItem, addToCart } from '../actions/index'
import Items from '../components/items/Items'

class ItemsContainer extends Component {

	componentDidMount() {
		this.props.fetchItems()
	}

	render() {
		if (this.props.currentUser.id === undefined) {
			return <Redirect to='/' />
		}
		else {
			return (
			<div className='Items-Container'>
				<h2>Items</h2>
				<Items items={this.props.items} currentUser={this.props.currentUser} addToCart={this.props.addToCart} />
			</div>
		)}
	}
}

const mapStateToProps = state => {
	return {
		items: state.items.all,
		currentUser: state.users.current,
		store_id: 1
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchItems: () => dispatch(fetchItems()),
		addItem: (name, content, price, store_id) => dispatch(addItem(name, content, price, store_id)),
		addToCart: (userId, itemId) => dispatch(addToCart(userId, itemId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)