import React from 'react';

function ListItem(props) {
    const {item} = props

    console.log(item)

    return <li>{item}</li>
}

export default ListItem;