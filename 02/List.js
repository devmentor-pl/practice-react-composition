import React from "react";

import ListItem from "./ListItem";

function List({ items }) {
  return (
    <ul>
      {items.map((user) => {
        const id = crypto.randomUUID();
        return <ListItem key={id} text={user} />;
      })}
    </ul>
  );
}

export default List;
