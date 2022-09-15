import React from 'react';

import ListItem from './ListItem';

function List(props) {

    const { items } = props

    return (
        <ul>
            {items.map(element => {
              return  <ListItem item={element} />
            })}

        </ul>
    )
}

export default List;
