import React from 'react';

export default class TableHeader extends React.Component {
	render() {
		return (
			<thead>
				<tr>
					<th></th>
					<th>Przedmiot</th>
					<th>ilość</th>
					<th>cena</th>
					<th>należność</th>
				</tr>
			</thead>
		);
	}
}
