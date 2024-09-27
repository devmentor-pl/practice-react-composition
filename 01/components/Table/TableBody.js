import React from 'react';

import { TableRow } from './TableRow';

export class TableBody extends React.Component {
	render() {
		const { data } = this.props;

		const itemList = data.map((item) => (
			<TableRow
				key={item.id}
				name={item.name}
				price={item.price}
				quantity={item.quantity}
			/>
		));
		return <tbody>{itemList}</tbody>;
	}
}
