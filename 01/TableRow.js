import React from 'react';


const TableRow = props => {
    const {id, name, price, quantity} = props;
    const sum = price * quantity;
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{sum}</td>
            </tr>
        </>

    )

}

export default TableRow;