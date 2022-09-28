import React from 'react';

import ListItem from './ListItem';

function List(props) {
    let id = 0;
    const list = props.items.map(n=> 
        {id++;
        return <ListItem key={id} name={n}/> });
    return <ul>{ list }</ul>
}

export default List;
