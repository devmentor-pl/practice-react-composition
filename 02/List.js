import React from 'react';

import ListItem from './ListItem';

function List(props) {
    //const {usersList} = props;
    const list = props.items.map(n => <ListItem name={n}/>);
    return <ul>{ list }</ul>
    /*return (
        <ul>
            <ListItem items={usersList}/>
        </ul>
    )*/
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
