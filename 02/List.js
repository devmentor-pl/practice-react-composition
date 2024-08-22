import React from 'react';

import ListItem from './ListItem';

function List(props) {
    

    const list = props.items.map(el => {
        return <ListItem name={el} />
    })

    return (
        <ul>
            {list}
        </ul>
    )



}

export default List;
