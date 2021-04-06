import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const { items } = props;
    return (
        <ul>
            <ListItem items={items} />
        </ul>
    )
}

export default ListItem;