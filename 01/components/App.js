import React from "react";
import { Table, TableBody, TableFooter, TableHeader, TableRow } from "./Table";
import data from "../data.json";

class App extends React.Component {

    render() {
        const columnNames = ['ID', 'Name', 'Quantity', 'Price'];
        const totalPrice = data.reduce((acc, currItem) => {
            return acc + (currItem.price * currItem.quantity);
        }, 0);
        const tableRows = data.map(row => <TableRow key={row.id} data={row} />);

        return (
            <Table>
                <TableHeader data={columnNames} />
                <TableBody>
                    {tableRows}
                </TableBody>
                <TableFooter data={totalPrice} />
            </Table>
        )
    }
}
export default App;