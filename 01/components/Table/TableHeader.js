import React from 'react'

const TableHeader = props => {
	return (
		<thead>
			<tr>
				<th colSpan="1">Nazwa</th>
				<th colSpan="1">Cena</th>
				<th colSpan="1">Ilość</th>
				<th colSpan="1">Razem</th>
			</tr>
		</thead>
	)
}

export default TableHeader
