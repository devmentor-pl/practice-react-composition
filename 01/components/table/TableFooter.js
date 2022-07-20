import React from "react";

export default function TableFooter({ totalPrice }) {
  return (
    <tfoot>
      <tr>
        <td colSpan="3">Total</td>
        <td>{totalPrice}</td>
      </tr>
    </tfoot>
  );
}
