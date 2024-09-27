import React from 'react';
import { v4 as uuid } from 'uuid';

export class TableHeader extends React.Component {
	render() {
		const { columnNames } = this.props;

		const columnList = columnNames.map((name) => {
			return <td key={uuid()}>{name}</td>;
		});

		return (
			<thead>
				<tr>{columnList}</tr>
			</thead>
		);
	}
}
