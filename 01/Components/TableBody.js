import React from 'react';
import TableRow from './TableRow';

const TableBody = props => {
    const {data} = props;
    const items = data.map(item => {
        const { id, name, price, quantity } = item;
        return(
            <TableRow
                key={id}
                id={id}
                name={name}
                price={price}
                quantity={quantity}
            />
        )
    })

    return (
        <tbody>
            { items }
        </tbody>
    )
}

export default TableBody
