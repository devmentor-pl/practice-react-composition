import React from 'react';

const TableRow = props => {
    const {id, name, price, quantity} = props

    return (
        <tr>    
            <th>{id}</th>
            <th>{name}</th>
            <th>{price}</th>
            <th>{quantity}</th>
            <th>{price} * {quantity}</th>
        </tr>
   ) 
}

export default TableRow;