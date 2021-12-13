import React from "react";

import ListItem from "./ListItem";

function List(props) {
  const list = props.items.map((item, index) => {
    return <ListItem key={index} item={item} />;
  });

  return <ul>{list}</ul>;
}

export default List;
