import React from 'react'

import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableFooter from './TableFooter'

class Table extends React.Component {
	render() {
		const { data } = this.props

		const renderRows = data.map(item => {
			const { name, price, quantity, id } = item

			return <TableRow name={name} price={price} quantity={quantity} totalPrice={price * quantity} key={id} />
		})

		const totalPrices = renderRows.map(row => row.props.totalPrice)

		return (
			<table>
				<TableHeader />

				<TableBody> {renderRows} </TableBody>
				<TableFooter product={totalPrices} />
			</table>
		)
	}
}

export default Table