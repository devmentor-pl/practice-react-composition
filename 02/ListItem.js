import React from 'react';

function ListItem(props) {
    const {item, id} = props;
    console.log(item.id)
    return <li key={id}>{item.name}</li>
}

export default ListItem;