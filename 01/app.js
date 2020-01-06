import React from 'react';
import ReactDOM from 'react-dom';

import {Table,TableHeader,TableFooter,TableBody} from './components/Table';
import data from './data.json';

function App()  {
    const headers = Object.keys(...data);
    const sum = data.reduce((prev, cur) => prev +(cur.price * cur.quantity),0); 
    
    return (
        <Table>
            <TableHeader headers ={headers} />
            <TableBody data={data} />
            <TableFooter sum={sum}/>
        </Table>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));