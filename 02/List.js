import React from 'react';
import { v4 as uuid } from 'uuid';

import ListItem from './ListItem';

const List = (props) => {
  const { items } = props;

  const renderList = items.map((item) => {
    return <ListItem name={item} key={uuid()} />;
  });

  return <ul>{renderList}</ul>;
};

export default List;
