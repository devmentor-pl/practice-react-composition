import React from "react";

import ListItem from "./ListItem";
import { v4 as uuid } from "uuid";
function List(props) {
  const { users } = props;

  return (
    <ul>
      {users.map((element) => {
        return <ListItem key={uuid()} item={element} />;
      })}
    </ul>
  );
}

export default List;
