import React from "react";

const TableRow= ({ price, quantity, name }) => {
    const total = price * quantity;

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{total}</td>
        </tr>
    );
}

export default TableRow;