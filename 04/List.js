import React from 'react';

class List extends React.Component {
    render() {
        const { files } = this.props;
        return (
            <ul>
                {files.map((file) => (
                    <li key={file.id}>
                        <strong>{file.name}</strong> ({file.size} bytes)
                        <p>{file.content}</p>
                    </li>
                ))}
            </ul>
        );
    }
}