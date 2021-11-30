import React from 'react';

const TableRow = (props) => {
  const { name, price, quantity } = props;
  return (
    <>
      <td>{name}</td>
      <td>
        {quantity} x {price} zł = <strong>{quantity * price}</strong> zł
      </td>
    </>
  );
};

export default TableRow;
