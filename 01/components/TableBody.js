import React from "react";
import { v4 as uuid } from "uuid";

const TableBody = (props) => {
  const headerBorder = {
    border: "1px solid black",
    margin: "0",
  };

  const { data } = props;

  console.log(data);

  const tableBody = props.data.map((item) => {
    return (
      <tr key={uuid()}>
        <td style={headerBorder}>{item.name}</td>
        <td style={headerBorder}>{item.price}</td>
        <td style={headerBorder}>{item.quantity}</td>
      </tr>
    );
  });

  return <tbody>{tableBody}</tbody>;
};

export default TableBody;
