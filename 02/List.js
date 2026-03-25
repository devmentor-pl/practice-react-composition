import React from "react";

import ListItem from "./ListItem";

function List(props) {
  const { usersList } = props;
  return (
    <ul>
      {usersList.map((user, idx) => (
        <ListItem key={idx} user={user} />
      ))}
    </ul>
  );
}

export default List;
