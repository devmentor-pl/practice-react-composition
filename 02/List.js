import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const { items } = props;

    return (
        <ul>
            {items.map((el) => {
                return (
                    <ListItem name={el} key={el} />
                )
            })}
        </ul>
    )
}

export default List;
