import React from "react";

const TableRow = props => {
    
    const {items} = props;
    const values = Object.values(items);
    const totalPrice = items.price * items.quantity;

    return (
        <tr>
            {values.map((item, i) => (
                <td key={i}>{item}</td>
            ))}
            <td>{totalPrice}</td>
        </tr>
        
    )
}

export default TableRow;