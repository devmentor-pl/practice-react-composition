import React from "react";

const TableRow = (props) => {
  const { name, price, quantity } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{price * quantity}</td>
    </tr>
  );
};

export default TableRow;
