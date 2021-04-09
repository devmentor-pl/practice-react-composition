import React from 'react';

function ListItem(props) {
    const list = props.items.map(
        i => <li key={i}> {i} </li>
    );
    return <ul>{list}</ul>
}

export default ListItem;