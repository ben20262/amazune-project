import React from 'react'
import Item from './Item'

const Items = props => {
	return (
		<div className='Items-Component' >
			{props.items.map(item => <Item key={item.id} item={item} addToCart={props.addToCart} currentUser={props.currentUser} />)}
		</div>
	)
}

export default Items