import React from 'react'

const Store = props => {
	return (
		<div>
			<h3>{props.store.name}</h3>
			<p>{props.store.content}</p>
		</div>
	)
}

export default Store