import React from "react";

import ListItem from "./ListItem";

function List(props) {
  const { users } = props;

  return (
    <ul>
      {users.map((element) => {
        return <ListItem key={element.id} item={element} />;
      })}
    </ul>
  );
}

export default List;
