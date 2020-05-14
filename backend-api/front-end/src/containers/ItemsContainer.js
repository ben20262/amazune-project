import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems, addItem, addToCart } from '../actions/index'
import Items from '../components/items/Items'
import ItemInput from '../components/items/ItemInput'

class ItemsContainer extends Component {

	componentDidMount() {
		this.props.fetchItems()
	}

	render() {
		return (
			<div className='Items-Container'>
				<h3>Items</h3>
				<ItemInput addItem={this.props.addItem} storeId={this.props.store_id} />
				<Items items={this.props.items} currentUser={this.props.currentUser} addToCart={this.props.addToCart} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		items: state.items,
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