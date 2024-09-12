import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const {items} = props;
    return (
        <ul>
            {items.map(item => {
                return <ListItem key={item + Math.random()}data={item}/>
            })}
        </ul>
    )
}

export default List;
