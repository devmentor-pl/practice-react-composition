import React from "react";

const TableRow = props => {
    const {item: {name, price, quantity}} = props;
    return (
      <>
          <td>{name}</td>
          <td>{price}</td>
          <td>{quantity}</td>
      </>
    )
}

export default TableRow;