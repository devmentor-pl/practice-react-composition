import React from 'react';

const TableRow = (props) => {
	const { product } = props;

	return (
		<tr>
			{product.map((i, index) => (
				<td key={index}>{i}</td>
			))}
		</tr>
	);
};

export default TableRow;
