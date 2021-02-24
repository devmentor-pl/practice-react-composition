import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const {usersList} = props;
    const listMap = () => {
        if (usersList.length === 0) {
            return
        }
        return usersList.map((item) => {
            return (
                <ListItem key={item.id} item={item}/>
            )
        })
}
    return (
        <ul>
            {listMap()}
        </ul>
    )
}

export default List;