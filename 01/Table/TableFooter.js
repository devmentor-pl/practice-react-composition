import React from "react";

const TableFooter = (props) => {
  const { totalPrice } = props;
  console.log(totalPrice);
  const priceToPay = totalPrice.reduce((total, product) => {
    return (total = total + product.price * product.quantity);
  }, 0);

  return (
    <tfoot>
      <tr>
        <td> Razem: {priceToPay}</td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
