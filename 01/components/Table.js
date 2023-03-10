import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

class Table extends React.Component {
	render() {
		const { data } = this.props;
		console.log(data);

		return (
			<table>
				<TableHeader columnNames={['id', 'nazwa', 'cena', 'ilość', ' razem']} />
				<TableBody products={data} />
				<TableFooter products={data} />
			</table>
		);
	}
}

export default Table;
