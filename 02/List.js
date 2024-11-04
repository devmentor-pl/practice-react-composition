import React from "react";

import ListItem from "./ListItem";

function List(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((user, i) => (
        <ListItem key={i} user={user} />
      ))}
    </ul>
  );
}

export default List;
