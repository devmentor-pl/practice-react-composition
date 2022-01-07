import React from 'react';


const ListItem = props => {

    const {name,size,content} = props;

    return (
        <li>
            <h2>{name}</h2>
            <span>Rozmiar: {size}</span>
            <p>{content}</p>
        </li>
    )

}

export default ListItem;