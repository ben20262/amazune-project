import React, { Component } from 'react'

export default class Stores extends Component {

	

	render() {
		return (
			<div>
				{props.stores.all.map(store => <Store store={store} key={store.id} />)}
			</div>
		)
	}
}

