import React from 'react';
import ReactDOM from 'react-dom';

import Table from './Table/Table';
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableBody';
import TableFooter from './Table/TableFooter';
import data from './data.json';

const style = { 'border': '1px solid black' }

function App()  {
    return <Table style={style}>
        <TableHeader />
        <TableBody data={data}>
        </TableBody>
        <TableFooter data={data} />
    </Table>
}

ReactDOM.render(<App/>, document.querySelector('#root'));