import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link,
		Redirect		
		} from 'react-router-dom'
import { addItem, addToCart } from '../../actions/index'
import Items from '../items/Items'
import ItemInput from '../items/ItemInput'

class Store extends Component {

	state = {
		likes: 0
	}

	handleClick = () => {
		this.setState(oldState => {
			return {
				likes: oldState.likes + 1
			}
		})
	}

	render() {
		let store
		if (this.props.store === undefined) {
			store = this.props.stores.find(value => value.id == this.props.match.params.storeId)
			let items = this.props.items.filter(value => value.store_id === store.id)
			if (store === undefined) {
				return (() => <Redirect to={'/stores'} />)
				
			}
			return (
				<div>
					<h3>{store.name}</h3>
					<p>{store.content}</p>
					<ItemInput addItem={this.props.addItem} store_id={store.id} />
					<Items items={items} currentUser={this.props.currentUser} addToCart={this.props.addToCart} />
				</div>
			)
		} else {
			store = this.props.store
			return (
				<div>
					<Link to={`/stores/${store.id}`}><h3>{store.name}</h3></Link>
					<button onClick={this.handleClick}>Like Store</button>
					<p>{this.state.likes}</p>
					<p>{store.content}</p>
				</div>
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		items: state.items.all,
		currentUser: state.users.current
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addItem: (name, content, price, store_id) => dispatch(addItem(name, content, price, store_id)),
		addToCart: (userId, itemId) => dispatch(addToCart(userId, itemId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Store)