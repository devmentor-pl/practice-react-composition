import React from 'react';

import ListItem from './ListItem';
import { v4 as uuid } from 'uuid';


function List(props) {
    const { items } = props

    const users = items.map(item => <ListItem key={uuid()} name={item} />)
    
    return (
        <ul>
            {users}
        </ul>
    )
}

export default List;
