import React from "react"
import TableHeader from "./TableHeader"
import TableBody from "./TableBody"
import TableRow from "./TableRow"
import TableFooter from "./TableFooter"

class Table extends React.Component {

	RowsRender() {
		const {data} = this.props
		if(!data || data.length === 0) {
			return <tr><td colSpan='5'>Nie ma danych do wyświetlenia</td></tr>
		}
		return data.map(({id, name, price, quantity}) => {
			return <TableRow key={id} items={[id, name, price, quantity, price * quantity]} />
		})
	}

	totalPrice() {
		const {data} = this.props
				
		return data ? data.reduce((acc, item) => acc + (item.price * item.quantity), 0) : 0
	}



	render() {
		console.log("rendering table....");
		return (
			<Table>
				<TableHeader colNames={["ID", "Name", "Price", "Quantity", "Sum"]} />
				<TableBody>
					{this.RowsRender()}
				</TableBody>
				<TableFooter items={['', '', '', '', this.totalPrice()]}/>
			</Table>
		)
	}
}

export default Table
