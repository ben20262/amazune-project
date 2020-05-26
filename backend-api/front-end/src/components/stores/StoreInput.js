import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

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
		if (this.state.user_id) {
			this.props.addStore(this.state)
		} else {
			return <Redirect to={'/'} />
		}

	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} >
				<h3>Add Store</h3>
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