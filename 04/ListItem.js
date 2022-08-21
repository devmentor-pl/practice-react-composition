import React from 'react';

export default class ListItem extends React.Component {
    render() {
        const {name, content, size} = this.props
        return (
            <li>
                <header>{name}</header>
                <p>{content}</p>
                <p>{size}</p>
            </li>
        )
    }
}