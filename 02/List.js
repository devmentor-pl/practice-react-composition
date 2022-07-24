import React from 'react';
import ListItem from './ListItem';

import { v4 as uuidv4 } from 'uuid';

function List({ items }) {
    return (
        <ul>
            {items.map(user => <ListItem key={uuidv4()} userName={user} />)}
        </ul>
    )
}

export default List;