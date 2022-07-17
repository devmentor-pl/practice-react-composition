import React from 'react';
import ReactDOM from 'react-dom';
import { Table, TableHeader, TableBody, TableRow, TableFooter } from './Components/Table';

import { v4 as uuidv4 } from 'uuid';
import data from './data.json';

const App = () => {
    return (
        <Table>
            <TableHeader names={['ID', 'Name', 'Price', 'Quantity', 'Total Price:']} />
            <TableBody>
                {data.map(row =>
                    <TableRow
                        key={uuidv4()}
                        id={row.id}
                        name={row.name}
                        price={row.price}
                        quantity={row.quantity}
                        totalPrice={row.price * row.quantity}
                    />)}
            </TableBody>
            <TableFooter basketPrice={data.map(item=>item.price*item.quantity)}/>
        </Table>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));