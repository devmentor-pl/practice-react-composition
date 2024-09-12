import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const { items } = props
    return (
        <ul>
            <ListItem usersList={items} />
        </ul>
    )
}

export default List
