import React from 'react';

function ListItem(props) {
    const { users } = props

    const Ouser = users.map(user => {

        return <li>{user}</li>
    })

    return Ouser
}

export default ListItem;