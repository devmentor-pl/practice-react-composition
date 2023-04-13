import React from 'react';

function ListItem(props) {
    const { users } = props;
    console.log(users);
    const listItems = users.map(({ id, userName }) => <li key={id}>{userName}</li>);

    return (
        <>
            {listItems}
        </>
    );
}

export default ListItem;