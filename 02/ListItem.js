import React from "react";


function ListItem(props) {
  const { item } = props;
  return <li>{item.name}</li>;
}

export default ListItem;
