import React from "react";

const TableHeader = (props) => {
  const { headerItems } = props;
  // dlaczego jeśli zrobię headerItems.map to nie działa??  nie do końca rozumiem działanie propos :(
  // console.log(headerItems)

  const list = props.items.map((i) => (
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
