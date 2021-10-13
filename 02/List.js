import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const {items} = props;
    return (
        <ul>
            <ListItem names={items}/>
        </ul>
    )
}

export default List;