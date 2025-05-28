import React from "react";

const TableRow = ({ id, name, price, quantity }) => (
  <tr>
    <td key={id}>{name}</td>
    <td key={id}>{price}</td>
    <td key={id}>{quantity}</td>
    <td key={id}>{price * quantity} zł</td>
  </tr>
);

export default TableRow;
