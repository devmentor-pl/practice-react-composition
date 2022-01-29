import React from "react";
import { v4 as uuid } from "uuid";

const TableBody = (props) => {
  const headerBorder = {
    border: "1px solid black",
    margin: "0",
  };

  const { data } = props;

  console.log(data);

  const tableFooter = props.data.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);

  return (
    <tfoot>
      <tr>
        <td style={headerBorder}>
          <p>Total price:</p>
        </td>
        <td style={headerBorder}>{tableFooter}</td>
      </tr>
    </tfoot>
  );
};

export default TableBody;
