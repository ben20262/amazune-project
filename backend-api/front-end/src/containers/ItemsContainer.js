import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../actions/index'
import Items from '../components/items/Items'

class ItemsContainer extends Component {

	componentDidMount() {
		this.props.fetchItems()
	}

	render() {
		return (
			<div className='ItemsContainer'>
				<Items items={this.props.items} />
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
		fetchItems: () => dispatch(fetchItems())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)