import React from 'react';
import ListItem from './ListItem';

function List(props) {  
    const { users } = props;
    const usersList = users.map(user => {
        return (
            <ListItem key={user} user={user}/>
        )
    })
    return (
        <ul>
            { usersList }
        </ul>
    )
}

export default List;