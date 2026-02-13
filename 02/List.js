import React from 'react';

import ListItem from './ListItem';

function List(props) {
    return (
        <ul>
            {props.items.map((user, index) =>(
            <ListItem 
                key={index}
                id={index + 1}
                name={user.name}
                surname={user.surname}
            />
            ))}
        </ul>
    )
}

export default List;
