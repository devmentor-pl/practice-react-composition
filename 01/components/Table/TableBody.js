import React from 'react';
import TableRow from './TableRow';


const TableBody = props => {

    const {data} = props;
    const rows = data.map(item => {
        const {id,name,price,quantity} = item;
        return <TableRow key={id} id={id} name={name} price={price} quantity={quantity} />
    });

    return (
        <tbody>
            {rows}
        </tbody>
    )


}

export default TableBody;