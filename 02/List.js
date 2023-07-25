import React from "react";

import ListItem from "./ListItem";

const List = (props) => {
  const usersList = props.items.map((item, index) => {
    return (
      <ListItem
        key={index}
        username={item}
      />
    );
  });
  return <ul>{usersList}</ul>;
};

export default List;
