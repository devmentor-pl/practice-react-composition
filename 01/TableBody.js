import React from 'react';
import { TableRow } from './TableRow';

class TableBody extends React.Component {
	render() {
		const { data } = this.props;

		return (
			<tbody>
				{data.map(product => (
					<TableRow
						key={product.id}
						name={product.name}
						price={product.price}
						quantity={product.quantity}
						priceSum={product.quantity * product.price}
					/>
				))}
			</tbody>
		);
	}
}

export { TableBody };
