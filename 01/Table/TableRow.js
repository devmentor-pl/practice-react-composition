import React from "react";


const TableRow = props => {
    return (
      <td style={{ border: "1px solid blue" }}>
        {props.price} PLN * {props.quantity}
      </td>
    );
}

export default TableRow