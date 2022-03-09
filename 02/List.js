import React from 'react';

import ListItem from './ListItem';

function List (props) {
    const {items} = props;

    const userList = items.map((item,index) => {
        return (
            <ListItem key={index} data={item}/>
        )
    })
    return <ul>{userList}</ul>
}

export default List;