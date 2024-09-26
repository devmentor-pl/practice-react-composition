import React from 'react';

import ListItem from './ListItem';

function List(props) {
        const {items} = props;
        return (
        <ul>
            {items.map ((i, index) => <ListItem key={index} name={i}/>)}
        </ul>
    )
}

export default List;
