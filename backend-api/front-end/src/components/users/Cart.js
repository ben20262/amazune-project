import React, { Component } from 'react';
import { buyCart } from '../actions/index'
 
class Cart extends Component {
    render() { 
        return (
            <div>
				{}
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

export default Cart;