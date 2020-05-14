import React from 'react'
import Item from './Item'

const Items = props => {
	return (
		<div className='Items-Component' >
			{props.items.all.map(item => <Item key={item.id} item={item} />)}
		</div>
	)
}

export default Items