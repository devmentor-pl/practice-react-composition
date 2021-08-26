import React from 'react';

import UsersList from './UsersList';
import cutEmptyElements from './CutEmptyElements';

function List(props) {

    const {items} = props;
    cutEmptyElements(items);
    
    const List = items.map(item => <UsersList name={item}/>);

    return (
        <ul>
            {List}
        </ul>
    )
}

export default List;