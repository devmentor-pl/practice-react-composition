import React from 'react';
import { Table, TableHeader, TableBody, TableFooter } from './Table';
import data from '../data.json';

const App = () => {
	const totalPrice = data.reduce(
		(acc, curr) => acc + curr.price * curr.quantity,
		0
	);

	return (
		<Table>
			<TableHeader columnNames={['Produkt', 'Cena', 'Ilość', 'Kwota']} />
			<TableBody data={data} />
			<TableFooter data={totalPrice} />
		</Table>
	);
};

export default App;
