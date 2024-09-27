import React from 'react';

function ListItem(props) {
    const { usersList } = props
    return (
        <>
            {
                usersList.map((user, key) => {
                    return <li key={key}>{user}</li>
                })
            }
        </>
    )
}

export default ListItem;