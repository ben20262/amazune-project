import React from 'react'

const Item = props => {
	return (
		<div id={'item-' + props.item.id}>
			<h3>{props.item.name}</h3>
			<h4>{props.item.store.name}</h4>
			<sup>{props.item.price}</sup>
			<p>{props.item.content}</p>
		</div>
	)
}

export default Item