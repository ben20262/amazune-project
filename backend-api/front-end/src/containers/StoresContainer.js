import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { fetchStores, fetchItems, addStore } from '../actions/index'
import StoreInput from '../components/stores/StoreInput'
import Stores from '../components/stores/Stores'
import Store from '../components/stores/Store'

class StoresContainer extends Component {

	componentDidMount() {
		this.props.fetchStores()
		this.props.fetchItems()
	}

	findStore = storeId => {
		return this.props.stores.find(store => store.id === storeId)
	}

	render() {
		if (this.props.currentUser.id === undefined) {
			return <Redirect to='/' />
		} else {
			return (
				<div className='Stores-Container' >
					<h2>Stores</h2>
					<Route exact path={this.props.match.url} render={() => {
						return (
							<div>
								<StoreInput addStore={this.props.addStore} currentUser={this.props.currentUser} />
								<Stores stores={this.props.stores} />
							</div>
						)
					}} />
					<Route path={`${this.props.match.url}/:storeId`} render={routerProps => <Store {...routerProps} stores={this.props.stores.all} />} />
				</div>
			)
		}
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
		fetchItems: () => dispatch(fetchItems()),
		addStore: (store) => dispatch(addStore(store))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StoresContainer)