import React from 'react'

const TableRow = ({name, price, quantity}) => {
    const totalPrice = price * quantity;

    return(
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{totalPrice}</td>
        </tr>
    )
}

export default TableRow;