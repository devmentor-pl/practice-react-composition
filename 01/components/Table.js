import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableRow from './TableRow';

class Table extends React.Component {
	renderRows() {
		const { data, columns } = this.props;

		return data.map((item) => {
			return <TableRow product={item} columns={columns} key={item.id} />;
		});
	}

	getTotalPrice() {
		const { data } = this.props;

		return data.reduce((acc, next) => {
			return acc + next.quantity * next.price;
		}, 0);
	}

	render() {
		const { columns } = this.props;

		return (
			<table>
				<TableHeader colNames={columns.map((name) => name.label)} />
				<TableBody>{this.renderRows()}</TableBody>
				<TableFooter
					totalPrice={this.getTotalPrice()}
					colQuantity={columns.length}
				/>
			</table>
		);
	}
}

export default Table;
