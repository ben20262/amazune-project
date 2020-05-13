import React, { Component } from 'react'
import Item from './Item'

export const Items = props => {
	return (
		<div className='Items-Component' >
			{props.items.map(item => <Item key={item.id} item={item} />)}
		</div>
	)
}
