import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStores, addStore } from '../actions/index'
import StoreInput from '../components/stores/StoreInput'
import Stores from '../components/stores/Stores'

class StoresContainer extends Component {

	componentDidMount() {
		this.props.fetchStores()
	}

	render() {
		return (
			<div className='Stores-Container' >
				<h2>Stores</h2>
				<StoreInput addStore={this.props.addStore} currentUser={this.props.currentUser} />
				<Stores stores={this.props.stores} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		stores: state.stores,
		currentUser: state.users.current
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchStores: () => dispatch(fetchStores()),
		addStore: (store) => dispatch(addStore(store))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StoresContainer)