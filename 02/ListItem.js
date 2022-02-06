import React from "react";
import { v4 as uuid } from "uuid";

function ListItem(props) {
  const list = props.items.map((i) => <li key={uuid()}>{i}</li>);
  return <li>{list}</li>;
}

export default ListItem;
