import React from "react";

const TableRow = props => {
    const { data } = props;
    const { id, name, price, quantity } = data;

    return (
        <tr>
            <td>{id}.</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price * quantity}</td>
        </tr>
    )
}

export default TableRow;