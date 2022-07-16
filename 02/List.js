import React from 'react';
import ListItem from './ListItem';

function List(props) {
    return (
        <ul>
            <ListItem items = {props.items} />
        </ul>
    )
}

export default ListItem;