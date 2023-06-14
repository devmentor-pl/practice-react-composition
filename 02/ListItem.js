import React from 'react';

function ListItem(props) {
    console.log(props)

    return <li>{props.user}</li>
}

export default ListItem;