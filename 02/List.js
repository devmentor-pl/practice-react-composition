import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const {data} = props
    return (
        <ul>
            <ListItem users = {data}/>
        </ul>
    )
}

export default List;
