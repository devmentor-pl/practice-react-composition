import React from 'react'

import ListItem from './ListItem'

function List(props) {
	const { items } = props

	return (
		<ul>
			<ListItem users={items} />
		</ul>
	)
}

export default List