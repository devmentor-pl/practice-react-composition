import React from 'react';

import ListItem from './ListItem';

function List({ usersList }) {
    return (
        <ul>
            {usersList.map((user, index) => (
                <ListItem key={index} user={user} />
            ))} 
        </ul>
    )
}

export default List;
