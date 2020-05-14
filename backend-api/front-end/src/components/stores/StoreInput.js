import React, { Component } from 'react'

class StoreInput extends Component {

	state = {
		name: '',
		content: '',
		user_id: this.props.currentUser.id
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.addStore(this.state)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} >
				<input type='text' name='name' placeholder='Store Name' value={this.state.name} onChange={this.handleChange} />
				<br />
				<textarea name='content' placeholder='Store Description' value={this.state.value} onChange={this.handleChange} />
				<br />
				<input type='submit' />
			</form>
		)
	}
}

export default StoreInput