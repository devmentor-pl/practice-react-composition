import React from "react";

const TableFooter = ({ totalPrice }) => (
  <tfoot>
    <tr>
      <td>Suma</td>
      <td></td>
      <td></td>
      <td>{totalPrice} zł</td>
    </tr>
  </tfoot>
);

export default TableFooter;
