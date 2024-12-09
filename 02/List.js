import React from "react";

import ListItem from "./ListItem";

function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem name={item} />
      ))}
    </ul>
  );
}

export default List;
