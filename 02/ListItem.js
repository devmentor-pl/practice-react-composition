import React from 'react';
import { v4 as uuid } from 'uuid';

function ListItem(props) {
    const { users } = props;
    const listItems = users.map(user => <li key={uuid()}>{user}</li>);

    return (
        <>
            {listItems}
        </>
    );
}

export default ListItem;