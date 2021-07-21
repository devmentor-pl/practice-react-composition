import React from 'react';

function ListItem(props) {
    console.log(props)
    return <li>{props.name}</li>
}

export default ListItem;