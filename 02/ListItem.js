import React from 'react';

function ListItem(props) {

    const {userList} = props;
    
    return (
        userList.map((user, index) => (
            <li key={index}>{user}</li>
        ))
    )
}

export default ListItem;