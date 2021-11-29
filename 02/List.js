import React from 'react';
import ListItem from './ListItem';

function List(props) {
    const list = props.items.map((item, index) => <ListItem key={index} data={item} />);
    return (
        <ul>
            {list}
        </ul>
    );
};

export default List;