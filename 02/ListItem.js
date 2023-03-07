import React from 'react';

function ListItem(props) {
    const {names} = props;
    return (
        names.map(name=> <li>{name}</li>)
    )
}

export default ListItem;