import React from 'react'

function ListItem(props) {
	const { users } = props

	const item = users.map(item => <li key={item}>{item}</li>)

	return item
}

export default ListItem