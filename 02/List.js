import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const {items} = props;
    const listItem = items.map(item => <ListItem name={item} />)
    return (
        <ul>
            {listItem}
        </ul>
    )
}

export default List;