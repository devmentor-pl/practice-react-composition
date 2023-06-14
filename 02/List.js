import React from 'react';

import ListItem from './ListItem';
 import { v4 as uuid } from "uuid";

function List(props) {

    const {users} = props;
    const list = users.map(u => <ListItem key={uuid()} user={u}/>)

    return (
        <ul>
           {list}
        </ul>
    )
}

export default List;
