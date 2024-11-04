import React from "react";

function ListItem(props) {
  const { user } = props;
  return <li>{user}</li>;
}

export default ListItem;
