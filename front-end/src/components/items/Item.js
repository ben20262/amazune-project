import React from 'react'

export const Item = props => {
	return (
		<div id={'item-', item.id}>
			<h3>{item.name}</h3>
			<h4>{item.store.name}</h4>
			<sup>{item.price}</sup>
			<p>{item.content}</p>
		</div>
	)
}