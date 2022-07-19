import React from 'react';
import { v4 as uuid } from 'uuid';

import ListItem from './ListItem';

function List(props) {

    const userList = props.items.map(
        item => <ListItem key={ uuid() } item={item} />
    );

    return (
        <ul>
            {userList}
        </ul>
    )
}

export default List;