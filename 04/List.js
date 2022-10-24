import React from 'react';
import {v4 as uuid} from 'uuid';

class List extends React.Component {
    render() {
        return (
            <ul>{this.renderList()}</ul>
        )
    }

    renderList() {
        const {list} = this.props

        return list.map(file => {
            return (
                <li key={uuid()}>
                    <p>File name: {file.name}</p>
                    <p>File size: {file.size}B </p> 
                    <p>File content: {file.content}</p>
                </li>
            )
        })
    }
}

export default List;