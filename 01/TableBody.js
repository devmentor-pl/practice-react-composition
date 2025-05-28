import React from "react";

import TableRow from "./TableRow";

const TableBody = ({ data }) => (
  <tbody>
    {data.map(({ id, name, price, quantity }) => (
      <TableRow key={id} name={name} price={price} quantity={quantity} />
    ))}
  </tbody>
);

export default TableBody;
