import React from 'react';

import ListItem from './ListItem';

function List(props) {
    return (
        <ul>
            { props.items.map(item => <ListItem key={ item } userName={ item }/> )}
        </ul>
    )
}

export default List;