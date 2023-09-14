import React from 'react';

export default class TableFooter extends React.Component {
	render() {
		const { totalSum } = this.props;

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
