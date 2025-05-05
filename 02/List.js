import React from 'react';

import ListItem from './ListItem';



function List(props) {

    const {userList} = props;

    return (
        <ul>
            <ListItem userList={userList}/>
        </ul>
    )
}

export default List;
