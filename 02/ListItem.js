import React from 'react';

function ListItem(props) {
    return <li key={props.index}>{props.name}</li>
}

export default ListItem;