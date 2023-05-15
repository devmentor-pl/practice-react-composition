import React from "react";
import TableCell from "./TableCell";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableBody from "./TableBody";
import { v4 as uuid } from "uuid";

class Table extends React.Component {
	render() {
		const { data } = this.props;

		const totalData = data.map(item => ({
			...item,
			totalPrice: item.price * item.quantity,
		}));

		const columnNames = [
			{ propName: "PRODUCT ID", name: "id" },
			{ propName: "NAME", name: "name" },
			{ propName: "PRICE", name: "price" },
			{ propName: "QUANTITY", name: "quantity" },
			{ propName: "TOTAL PRICE", name: "totalPrice" },
		];

		const headerCells = columnNames.map(item => {
			return <TableCell key={item.name} cellData={item.propName} />;
		});

		const bodyRow = columnNames.map(item => {
			return <TableCell key={uuid()} cellData={item.name} />;
		});

		const bodyRows = totalData.map(item => {
			return <TableRow key={uuid()} children={bodyRow} />;
		});

		return (
			<table>
				<TableHeader children={headerCells} />
				<TableBody children={bodyRows} />
			</table>
		);
	}
}

export default Table;
