import React from 'react';

function ListItem(props) {
    const { usersList } = props
    return usersList.map((e, index) => <li key={index}>{e}</li>)
}

export default ListItem;