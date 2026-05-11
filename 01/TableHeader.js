import React from 'react';

class TableHeader extends React.Component {
	render() {
		return (
			<thead>
				<tr>
					<th>Produkt</th>
					<th>Cena</th>
					<th>Ilość</th>
					<th>Kwota do zapłaty</th>
				</tr>
			</thead>
		);
	}
}

export { TableHeader };
