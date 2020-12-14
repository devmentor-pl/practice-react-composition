import React from 'react'

const ListItem = props => {
    const { name, size, type, date, text } = props.data;
    return (
        <li>
            <h3>{ name }</h3>
            <h4>Size: { size }</h4>
            <h4>Type: { type }</h4>
            <h4>Last modified: { date.toString() }</h4>
            <p>{ text }</p>
        </li>
    )
}

export default ListItem
