import React from 'react';

import ListItem from './ListItem';

function List(props) {
    const { items } = props;
    const listItems = items.map((item, index) => {
        return (
            <ListItem key={index} name={item} />
        )
    })
    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default List;