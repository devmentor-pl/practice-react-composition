import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const { items } = props;
    const listItems = items.map((item, index) => (
        <ListItem key={index} item={item} />
    ));
    return <ul>{listItems}</ul>;
}


export default List;
