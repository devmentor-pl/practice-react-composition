import React from 'react';
import { createRoot } from 'react-dom/client';

import Table from './components/Table';
import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';
import TableRow from './components/TableRow';
import TableFooter from './components/TableFooter';
import data from './data.json';
import './main.css';

function App() {

    // sum price 

    const total = data.products.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <Table data={data}>
             <Table.Header />
            <Table.Body>
                {data.products.map((item, index) => ( // index needs for isEven
                    <Table.Row
                        key={item.id}
                        id={item.id} 
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        isEven={index % 2 === 1}
                    />
                ))}
            </Table.Body>
            <Table.Footer total={total} />
        </Table>

    )

}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
