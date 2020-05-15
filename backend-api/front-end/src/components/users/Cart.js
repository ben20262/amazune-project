import React, { Component } from 'react';
import { buyCart } from '../../actions/index'
import { connect } from 'react-redux'
 
class Cart extends Component {
    render() { 
        return (
            <div>
				<ul>
					{this.props.items.map(item => <li key={item.id}>{item.name} ${item.price}</li>)}
				</ul>
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