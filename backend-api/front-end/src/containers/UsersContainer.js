import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/users/User'
import UserInput from '../components/users/UserInput'
import { fetchUsers, loginUser, addToCart, addUser } from '../actions/index'

class UsersContainer extends Component {

	componentDidMount() {
		this.props.fetchUsers()
	}

	render() {
		if (this.props.users.current.name !== undefined) {
			return (
				<User user={this.props.users.current} />
			)
		} else {
			return (
				<UserInput users={this.props.users} loginUser={this.props.loginUser} addUser={this.props.addUser} />
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		users: state.users
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchUsers: () => dispatch(fetchUsers()),
		loginUser: userId => dispatch(loginUser(userId)),
		addToCart: (userId, itemId) => dispatch(addToCart(userId, itemId)),
		addUser: (name) => dispatch(addUser(name))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)