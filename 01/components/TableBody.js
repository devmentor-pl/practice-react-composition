import React from 'react';
import TableRow from './TableRow';

const TableBody = (props) => {
	const { products } = props;

	const tableRows = products.map((product) => {
		return <TableRow key={product.id} product={product} />;
	});

	return <tbody>{tableRows}</tbody>;
};

export default TableBody;
