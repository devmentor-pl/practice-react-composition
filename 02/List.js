import React from 'react';

import ListItem from './ListItem';

function List(props) {
  const userListItems = props.items.map((user, index) => (
    <ListItem key={index} userName={user} />
  ));
  return <ul>{userListItems}</ul>;
}

export default List;
