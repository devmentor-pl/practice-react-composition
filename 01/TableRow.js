import React from 'react';

const TableRow = ({ name, price, quantity }) => {
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
