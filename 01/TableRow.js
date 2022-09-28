import React from 'react';


const TableRow = props => {
    const {name, price, quantity, sum} = props;

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{sum}</td>
            </tr>
        </>

    )

}

export default TableRow;