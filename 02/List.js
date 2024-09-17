import React from "react";
import ListItem from "./ListItem";

function List(props) {
  const { users } = props;
  const list = users.map((u, index) => <ListItem key={index} user={u} />);

  return <ul>{list}</ul>;
}

export default List;
