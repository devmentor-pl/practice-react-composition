import React from 'react';

function ListItem(props) {
    const {items} = props;
    return items.map((item) => {
        return <li>{item}</li>
    }) 
}

export default ListItem;