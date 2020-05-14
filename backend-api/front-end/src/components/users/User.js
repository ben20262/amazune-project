import React from 'react'

const User = props => {
	return (
		<div>
			<h4>{props.user.name}</h4>
			<p>{props.user.items.length} Items In Cart</p>
		</div>
	)
}

export default User