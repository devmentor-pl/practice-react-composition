import React from "react";

const TableFooter = (props) => {

  const{totalPrice} = props
  const list = totalPrice.reduce((total, product) => {
    const { price, quantity } = product;

    total = price * quantity;

    return (
      <td style={{ border: "1px solid blue"}} colSpan="3">
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
