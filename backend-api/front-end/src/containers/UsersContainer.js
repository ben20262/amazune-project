import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/users/User'
import UserInput from '../components/users/UserInput'
import { fetchUsers, loginUser, addUser } from '../actions/index'

class UsersContainer extends Component {

	componentDidMount() {
		this.props.fetchUsers()
	}

	render() {
		if (this.props.users.current.name !== undefined) {
			return (
				<div className='Users-Container'>
					<User user={this.props.users.current} />
				</div>
			)
		} else {
			return (
				<div className='Users-Container'>
					<h3>Please Login</h3>
					<UserInput users={this.props.users} loginUser={this.props.loginUser} addUser={this.props.addUser} />
				</div>
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
		addUser: (name) => dispatch(addUser(name))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)