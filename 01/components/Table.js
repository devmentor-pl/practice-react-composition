import React from 'react';
import { TableHeader, TableRow, TableFooter } from './Table/TableOrganizer';

class Table extends React.Component {
	render() {
		const { data } = this.props;
		//jak to sie dzieje ze nigdzie nie detchuje data a w consoli juz mam pliki sprasowane z jsona?
		console.log(data);

		// Zwróć uwagę na przekazywanie danych z rodzica do dziecka. ## Nie przekazuj wszystkich danych, lecz tylko te, które będą wykorzystane w dziecku ##.

		// czy to warto glowny komponent Table zasmiecac jak mozemy przeiterowac sobie po calym obiekcie wewnatrz TableFooter zamiast podawac tylko wybrane?
		const priceQuantity = data.map(item => ({
			price: item.price,
			quantity: item.quantity,
		}));

		return (
			<table>
				<TableHeader />
				<TableRow rows={data} />
				{/* <TableFooter data={data} /> */}
				<TableFooter data={priceQuantity} />
			</table>
		);
	}
}

export default Table;
