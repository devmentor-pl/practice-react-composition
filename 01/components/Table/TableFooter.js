import React from 'react';

export default class TableFooter extends React.Component {
	render() {
		const { data } = this.props;

		const totalSum = data.reduce((sum, row) => 
        sum + row.price * row.quantity, 0);

		return (
			<tfoot>
				<tr>
					<th></th>
					<th>Suma</th>
					<th>{totalSum}</th>
				</tr>
			</tfoot>
		);
	}
}
