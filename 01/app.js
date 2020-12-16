import React from 'react';
import ReactDOM from 'react-dom';

import Table from './Table/Table';
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableBody';
import TableFooter from './Table/TableFooter';
import TableRow from './Table/TableRow';
import data from './data.json';

const style = { 'border': '1px solid black' }

const tableRows = data.map(product => {
    const { id, name, price, quantity } = product;
    return (
        <TableRow key={id} name={name} price={price} quantity={quantity} />
    )
}) 

function App()  {
    return <Table style={style}>
        <TableHeader />
        <TableBody data={data}>
            {tableRows}
        </TableBody>
        <TableFooter data={data} />
    </Table>
}

ReactDOM.render(<App/>, document.querySelector('#root'));