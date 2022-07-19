import React from 'react';

class List extends React.Component {
    render() {

        const { data } = this.props;

        return data.map( file => {
            return (
                <ul key={file.id}>
                    <li>
                        <h3>File{file.name}</h3>
                        <p>File size: {file.size} B</p>
                        <p><strong>File content: </strong>{file.content}</p>
                    </li>
                </ul>
            )
        })
    }
}

export default List;