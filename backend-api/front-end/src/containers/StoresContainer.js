import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStores } from '../actions/index'

class StoresContainer extends Component {

	componentDidMount() {
		this.props.fetchStores()
	}

	render() {
		return (
			<div className='StoresContainer' >
				
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		stores: state.stores
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchStores
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StoresContainer)