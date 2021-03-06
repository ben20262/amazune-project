import React from 'react'
import Store from './Store'

const Stores = props => {

	return (
		<div className='Stores-Component'>
			{props.stores.all.map(store => <Store store={store} key={store.id} />)}
		</div>
	)
}

export default Stores