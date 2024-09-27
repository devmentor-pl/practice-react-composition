import React from 'react';

export const TableFooter = (props) => {
	const { data } = props;

	return (
		<tfoot>
			<tr>
				<td>Razem</td>
				<td></td>
				<td></td>
				<td>{data}</td>
			</tr>
		</tfoot>
	);
};
