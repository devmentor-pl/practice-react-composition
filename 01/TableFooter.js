import React from 'react';

class TableFooter extends React.Component {
	render() {
		const { totalSum } = this.props;

		return (
			<tfoot>
				<tr>
					<th colSpan={3}>Kwota do zapłaty</th>
					<td>{totalSum}</td>
				</tr>
			</tfoot>
		);
	}
}

export { TableFooter };
