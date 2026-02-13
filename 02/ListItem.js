import React from 'react';

function ListItem(props) {
    return(
        <ul>
        <li>Użytkownik: {props.id}</li>
        <li>Imię:{props.name}</li>
        <li>Nazwisko: {props.name}</li>
        </ul>
    )
        
}

export default ListItem;