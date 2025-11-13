import React from 'react';

class List extends React.Component {
    render() {
        const { filesList } = this.props;
        return (
            <ul>
                {filesList.map(file => (
                    <li key={file.id}>
                        <h3>{file.name} ({file.size} bytes)</h3>
                        <pre>{file.content}</pre>
                    </li>
                ))}
            </ul>
        );
    }
}

export default List;