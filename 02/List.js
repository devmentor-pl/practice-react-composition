import React from 'react';

import ListItem from './ListItem';

function List(props) {
    let id = 0;
    const list = props.items.map(n=> 
        {id++;
        return <ListItem key={id} name={n}/> });
    return <ul>{ list }</ul>
}

/*function List(props) {
    const {usersList} = props;
    return (
        <ul>
            <ListItem items={usersList}/>
        </ul>
    )
}*/

/*function List(props) {
    const users = props.items.map(i=>
        <li key={i}>{i}</li>
    )
    return (
        <ul>{users}
        </ul>
    )
}*/

export default List;
