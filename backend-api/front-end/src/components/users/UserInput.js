import React, { Component } from 'react'

class UserInput extends Component {

	state = {
		name: ''
	}

	handleChange = event => {
		this.setState({
			name: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.addUser(this.state.name)
		this.setState({
			name: ''
		})
	}

	handleSelect = event => {
		this.props.loginUser(event.target.value)
	}

	render() {
		return (
			<div className='UserInput'>
				<select name='users' onChange={this.handleSelect}>
					<option value='' ></option>
					{this.props.users.all.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
				</select>
				<form onSubmit={this.handleSubmit} >
					<input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
					<br />
					<input type='submit' />
				</form>
			</div>
		)
	}
}

export default UserInput