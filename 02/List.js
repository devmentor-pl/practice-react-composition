import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const { usersList } = props;
    const finalList = usersList.map(user => {
        return (
            <ListItem name={user}/>
        )
    })
    return (
        <ul>
             {finalList}
        </ul>
    )
}

export default List;