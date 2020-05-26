import React, { Component } from 'react'

export default class ItemInput extends Component {
	
	state = {
		name: '',
		content: '',
		price: '0'
	}
	
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.addItem(this.state.name, this.state.content, this.state.price, this.props.store_id)
		this.setState({
			name: '',
			content: '',
			price: '0'
		})
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit} >
				<br />
				<input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='Item Name' />
				<br />
				<textarea name='content' value={this.state.content} onChange={this.handleChange} placeholder='Description' />
				<br />
				<input type='number' name='price' value={this.state.price} onChange={this.handleChange} placeholder='Price' />
				<input type='submit' />
			</form>
		)
	}
}
