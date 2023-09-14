import React from 'react';
import { TableHeader, TableRow, TableFooter } from './Table/TableOrganizer';

class Table extends React.Component {
	render() {
		const { data } = this.props;

		const priceQuantity = data.map(item => ({
			price: item.price,
			quantity: item.quantity,
		}));
		const totalSum = data.reduce((sum, row) => sum + row.price * row.quantity, 0);

		return (
			<table>
				<TableHeader />
				<TableRow rows={data} />
				{/* <TableFooter data={data} /> */}
				<TableFooter totalSum={totalSum} />
			</table>
		);
	}
}

export default Table;
