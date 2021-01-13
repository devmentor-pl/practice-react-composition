import React from 'react';

const TableFooter = (props) => {
  const { products } = props;

  const totalPrice = products.reduce((totalPrice, product) => {
    return (totalPrice += product.quantity * product.price);
  }, 0);

  return (
    <tfoot>
      <tr>
        <td>Do zapłaty</td>
        <td>{totalPrice} zł</td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
