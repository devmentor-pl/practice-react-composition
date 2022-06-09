import React from 'react';
import {v4 as uuid} from 'uuid';

class List extends React.Component {
    render() {
        return (
            <ul>{this.renderList()}</ul>
        )
    }

    renderList() {
        const {data} = this.props

        return data.map(file => {
            return (
                <li key={uuid()}>
                    <h2>File name: {file.name}</h2>
                    <p>File size: {file.size} B</p>
                    <p>{file.content}</p>
                </li>
            )
        })
    }
}

export default List;