import React from 'react';

const TableFooter = (props) => {
	const { products } = props;

	const summary = products.reduce((acc, next) => {
		return acc + next.quantity * next.price;
	}, 0);

	return (
		<tfoot>
			<tr>
				<td colSpan={5}>Cena całkowita: {summary} zł</td>
			</tr>
		</tfoot>
	);
};

export default TableFooter;
