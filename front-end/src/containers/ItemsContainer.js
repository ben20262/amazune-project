import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from './actions/index'

export default class ItemsContainer extends Component {

	componentDidMount() {
		this.props.fetchItems()
	}

	render() {
		return (
			<div className='ItemsContainer'>
				
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		items: state.items
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchItems
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)