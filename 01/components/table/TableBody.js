import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ data }) => {
  const list = data.map((item) => {
    return (
      <TableRow
        key={item.id}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
      />
    );
  });

  return <tbody>{list}</tbody>;
};

export default TableBody;
