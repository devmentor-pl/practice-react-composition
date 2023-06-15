import React from "react";

const TableHeader = (props) => {
  const { headerItems } = props;

  const list = headerItems.map((i) => (
    <th style={{ border: "1px solid blue" }} key={i.id}>
      {i.name} Price: {i.price} PLN
    </th>
  ));

  return (
    <thead>
      <tr>{list}</tr>
    </thead>
  );
};

export default TableHeader;
