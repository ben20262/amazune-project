import React from 'react'
import { Link } from 'react-router-dom'

const Item = props => {
	return (
		<div id={'item-' + props.item.id}>
			<h3>{props.item.name}</h3>
			<h4><Link to={`/stores/${props.item.store_id}`} >{props.item.store.name}</Link></h4>
			<sup>${props.item.price}</sup>
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