import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const { items } = props;
    const usersList = items.map(user => <ListItem  name={user}/>)
    return (
        <ul>
            {usersList}
        </ul>
    )
}

export default List;
