import React from "react";

const TableFooter = (props) => {
  const list = props.totalPrice.reduce((total, product) => {
    const { price, quantity } = product;

    total = price * quantity;

    return (
      <td>
        {" "}
        Total Price: <b>{total}</b> PLN
      </td>
    );
  }, 0);

  return (
    <tfoot>
      <tr >{list}</tr>
    </tfoot>
  );
};

export default TableFooter;
