import React from 'react';
import {v4 as uuid} from 'uuid';
import ListItem from './ListItem';

function List(props) {

    const {items} = props 

    const listItems = items.map(item => <ListItem key={uuid()} item={item} /> )  

    return (
        <ul>
           {listItems}
        </ul>
    )
}


export default List;