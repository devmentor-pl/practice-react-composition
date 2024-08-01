import React from 'react';

import ListItem from './ListItem';

function List(props) {
    return (
        <ul>
            {props.items.map((item, index) => {
                return (
                    <ListItem key={index} name={item}/>
                )
            })}
        </ul>
    )
}

export default List;
