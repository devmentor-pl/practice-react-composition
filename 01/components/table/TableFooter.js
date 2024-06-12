import React from 'react'

const TableFooter = props => {
	const { product } = props
	const total = product.reduce((next, number) => {
		return next + number
	}, 0)

	return (
		<tfoot>
			<tr>
				<td>Łączna wartość</td>
				<td></td>
				<td></td>
				<td>{total}</td>
			</tr>
		</tfoot>
	)
}

export default TableFooter