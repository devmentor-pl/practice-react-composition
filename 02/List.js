import React from 'react';

import ListItem from './ListItem';



function List(props) {
    const {items} = props;
     console.log(items)

    const list = items.map(i => {
       return <ListItem name={i.name}/>
       
    })

    return (
        <ul>
           {list}
        </ul>
    )
}

export default List;