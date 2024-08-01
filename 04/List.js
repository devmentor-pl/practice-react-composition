import React from 'react';

class List extends React.Component {
    render() {
        const list = this.props.data.map(file => {
            return (
                <li key={file.id}>
                    <h2>File name: <i>{file.name}</i></h2>
                    <p>File content: <i>{file.content}</i></p>
                    <p>File size: <i>{file.size}</i></p>
                </li>
            )
        })
        return <ul>{list}</ul>
    }
}

export default List;