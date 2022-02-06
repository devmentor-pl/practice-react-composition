import React from "react";

import ListItem from "./ListItem";

function List(props) {
  console.log(props);
  return (
    <ul>
      <ListItem items={props.items} />
    </ul>
  );
}

export default List;
