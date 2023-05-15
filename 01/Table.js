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

		const itemsList = totalData.map(row => {
			return (
				<tr key={uuid()}>
					{columnNames.map(cell => {
						return <td key={uuid()}>{row[cell.name]}</td>;
					})}
				</tr>
			);
		});

		return (
			<table>
				<TableHeader children={headerCells} />
				<TableBody children={itemsList} />
			</table>
		);
	}
}

export default Table;
