import React from 'react';

const TableRow = props => {
    const {item: {name, price, quantity}} = props
    return (
        <tr> 
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
        </tr>
    )
}

export default TableRow;