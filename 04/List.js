import React from 'react';
import { v4 as uuid } from 'uuid'

class List extends React.Component {
    render() {
        const { files } = this.props

        const filesData = files.map(file => {
            const { name, size, content } = file;
            return (
                <li key={uuid()}>
                    <p>Filename: {name}</p>
                    <p>Size: {size} B</p>
                    <article>Content: <p style={{ 'width': '500px' }}>{content}</p></article>
                </li>
            )
        })

        return (
            <ul>{filesData}</ul>
        )
    }
}

export default List;