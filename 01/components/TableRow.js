import React from 'react';

const TableRow = (props) => {
	const { product } = props;
	const summary = product.price * product.quantity;
	console.log(product);
	return (
		<tr>
			<td>{product.id}</td>
			<td>{product.name}</td>
			<td>{product.price}</td>
			<td>{product.quantity}</td>
			<td>{summary}</td>
		</tr>
	);
};

export default TableRow;
