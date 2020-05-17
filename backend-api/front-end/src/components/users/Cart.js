import React, { Component } from 'react';
import { buyCart } from '../../actions/index'
import { connect } from 'react-redux'
 
class Cart extends Component {
    render() {
		let itemTotal = this.props.items.reduce((acc, value) => {
			return acc + value.price
		}, 0)
        return (
            <div className='Cart-Component'>
				<ul>
					{this.props.items.map(item => <li key={item.id}>{item.name} ${item.price}</li>)}
				</ul>
				<p>Total: ${itemTotal}</p>
            </div>
        )
    }
}
 
const mapStateToProps = state => {
	return {
		user: state.users.current,
		items: state.users.current.items
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buyCart: userId => dispatch(buyCart(userId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)