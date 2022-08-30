import React from 'react';

function ListItem(props) {
    const { users } = props
   
    const oneUser = users.map(user => {
       
        return <li>{user}</li>
    })

    return oneUser

   

}

export default ListItem;