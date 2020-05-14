import React from 'react'

const Item = props => {
	return (
		<div id={'item-' + props.item.id}>
			<h3>{props.item.name}</h3>
			<h4>{props.item.store.name}</h4>
			<sup>{props.item.price}</sup>
			<p>{props.item.content}</p>
			<button
			onClick={event => {
				event.preventDefault()
				props.addToCart(props.currentUser.id, props.item.id)
			}}>
			Add To Cart</button>
		</div>
	)
}

export default Item