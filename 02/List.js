import React from "react";

import ListItem from "./ListItem";

function List(props) {
  const itemsList = props.items.map((item, key) => {
    return <ListItem key={key} item={item} />;
  });

  return <ul>{itemsList}</ul>;
}

export default List;
