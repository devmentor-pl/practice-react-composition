import React from 'react'

const TableBody = props => {
	const { children } = props
	console.log(children)
	return <tbody>{children}</tbody>
}

export default TableBody