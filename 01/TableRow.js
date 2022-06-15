import React from 'react';

const TableRow = props => {
        const {name, price, quantity} = props;
        const itemPrice = quantity * price;
        const rowStyles = {
            border: 'black solid 1px'
        }

        return (
            <tr>
                <td style= {rowStyles}>{name}</td>
                <td style= {rowStyles}>{price}</td>
                <td style= {rowStyles}>{quantity}</td>
                <td style= {rowStyles}>{itemPrice}</td>
            </tr>
        )
}


export default TableRow;