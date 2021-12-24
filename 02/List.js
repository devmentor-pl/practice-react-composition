import React from 'react';
import ListItem from './ListItem';

function List(props) {
    // console.log(props);
    const {items} = props;
    const listItems = items.map((data, ind) => {
        return(
            <ListItem key={ind} value={data}/>
        )
    })
    return (
        <ul>{listItems}</ul>
    )
}

export default List;