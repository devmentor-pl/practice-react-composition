import React from 'react'

const TableRow = props => {
	const { name, price, quantity, totalPrice } = props

	return (
		<tr>
			<td>{name}</td>
			<td>{price}</td>
			<td>{quantity}</td>
			<td>{totalPrice}</td>
		</tr>
	)
}

export default TableRow