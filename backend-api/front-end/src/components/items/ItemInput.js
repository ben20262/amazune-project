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
			...state,
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.addItem(this.state)
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit} >
				<input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
				<textarea name='content' value={this.state.content} onChange={this.handleChange} />
				<input type='text' name='image' value={this.state.image} onChange={this.handleChange} />
				<input type='number' name='price' step='.01' value={this.state.price} onChange={this.handleChange} />
				<input type='submit' />
			</form>
		)
	}
}
