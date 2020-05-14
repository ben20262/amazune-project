import React, { Component } from 'react'

export default class ItemInput extends Component {
	
	state = {
		name: '',
		content: '',
		image: '',
		price: '.00'
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
			image: '',
			price: '.00'
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
				<input type='text' name='image' value={this.state.image} onChange={this.handleChange} placeholder='Image' />
				<br />
				<input type='number' name='price' step='.01' value={this.state.price} onChange={this.handleChange} placeholder='Price' />
				<input type='submit' />
			</form>
		)
	}
}
