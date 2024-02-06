import React from 'react';

const TableFooter = ({ data }) => {
  const total = data.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <tfoot>
      <tr>
        <td colSpan="3">Total:</td>
        <td>{total}</td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
