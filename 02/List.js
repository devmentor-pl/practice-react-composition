import React from "react";

import ListItem from "./ListItem";

function List({ items }) {
  return (
    <ul>
      {items.map(({ name, id }) => {
        return <ListItem key={id} text={name} />;
      })}
    </ul>
  );
}

export default List;
