import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableRow from './TableRow';

class Table extends React.Component {
	renderRows() {
		const { data } = this.props;

		return data.map(({ id, name, price, quantity }) => {
			return (
				<TableRow
					product={[id, name, price, quantity, price * quantity]}
					key={id}
				/>
			);
		});
	}

	getTotalPrice() {
		const { data } = this.props;

		return data.reduce((acc, next) => {
			return acc + next.quantity * next.price;
		}, 0);
	}

	render() {
		return (
			<table>
				<TableHeader columnNames={['id', 'nazwa', 'cena', 'ilość', 'razem']} />
				<TableBody>{this.renderRows()}</TableBody>
				<TableFooter totalPrice={this.getTotalPrice()} />
			</table>
		);
	}
}

export default Table;
