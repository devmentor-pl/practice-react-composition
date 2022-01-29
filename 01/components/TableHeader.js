import React from "react";
import { v4 as uuid } from "uuid";

const TableHeader = (props) => {
  const headerBorder = {
    border: "1px solid black",
    margin: "0",
  };

  const { headers } = props;

  console.log(headers);

  const tableHeader = props.headers.map((item) => {
    return (
      <tr key={uuid()}>
        <th style={headerBorder}>{item.name}</th>
        <th style={headerBorder}>{item.price}</th>
        <th style={headerBorder}>{item.quantity}</th>
      </tr>
    );
  });

  return <thead>{tableHeader}</thead>;
};

export default TableHeader;
