import React from "react";
import { Table, TableBody, TableFooter, TableHeader, TableRow } from "./Table";
import data from "../data.json";

class App extends React.Component {

    render() {
        const itemsArray = data.map(item => ({ ...item, totalPrice: item.price * item.quantity }));
        const columnsNames = [
            { propName: 'id', label: 'ID' },
            { propName: 'name', label: 'Name' },
            { propName: 'quantity', label: 'Quantity' },
            { propName: 'price', label: 'Price' },
            { propName: 'totalPrice', label: 'Total price' },
        ];
        const totalPrice = itemsArray.reduce((acc, currItem) => {
            return acc + currItem.totalPrice;
        }, 0);
        const tableRows = itemsArray.map(row => {
            return <TableRow key={row.id} data={row} columnsNames={columnsNames} />
        });

        return (
            <Table>
                <TableHeader columnsNames={columnsNames} />
                <TableBody>
                    {tableRows}
                </TableBody>
                <TableFooter data={totalPrice} />
            </Table>
        );
    }
}
export default App;