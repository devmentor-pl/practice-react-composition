import React from 'react';

import ListItem from './ListItem';
import {v4 as uuid} from 'uuid';

function List(props) {
    const {items} = props
    const listContent = items.map(item => 
            <ListItem key={ uuid() } item={ item }/>
        )

    return (
        <ul>
            { listContent }
        </ul>
    )
}

export default List;