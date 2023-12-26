import React from 'react';

import ListItem from './ListItem';

function List(props) {
    return (
        <ul>
            {props.items.map((item, index) => (
                <ListItem key={index} name={item.name} surname={item.surname} />
            ))}
        </ul>
    )
}

export default List;
