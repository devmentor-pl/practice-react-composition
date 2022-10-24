import React from 'react';
import ListItem from './ListItem';

function List(props) {
    const list = props.items.map(n => <ListItem name={n}/>);
    return <ul>{ list }</ul>
}

export default List;
