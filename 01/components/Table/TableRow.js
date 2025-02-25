import React from 'react';

export default class TableRow extends React.Component {
	render() {
		const { rows } = this.props;

		const row = rows.map(r => {
			return (
				<tr key={r.id}>
					<th>{r.id}.</th>
					<td>{r.name}</td>
					<td>{r.quantity}</td>
					<td>{r.price}</td>
					<td>{r.price * r.quantity}</td>
				</tr>
			);
		});

		return <tbody>{row}</tbody>;
	}
}
