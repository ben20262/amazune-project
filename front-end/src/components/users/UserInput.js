import React from 'react'

class UserInput {

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
	}

	handleSelect = event => {
		this.props.loginUser(event.target.value)
	}

	render() {
		return (
			<div className='UserInput'>
				<select name='users' onSelect={this.handleSelect}>
					<option value=''></option>
					{this.props.users.map(user => <option value={user.id}>{user.name}</option>)}
				</select>
				<form onSubmit={this.handleSubmit} >
					<input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
					<input type='submit' />
				</form>
			</div>
		)
	}
}