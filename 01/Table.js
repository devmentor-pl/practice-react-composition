import React from 'react';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';

class Table extends React.Component {
	render() {
		const { data } = this.props;
		console.log(data);

		const sum = data.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

		return (
			<table>
				<TableHeader />
				<TableBody data={data} />
				<TableFooter totalSum={sum} />
			</table>
		);
	}
}

export default Table;
