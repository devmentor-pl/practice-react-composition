import React from 'react';

class List extends React.Component {
    render() {
        const { files } = this.props;
        
        return (
            <ul>                
                {files.map(file => (
                    <li key={ file.id }>                        
                        <h2> {file.name } </h2>
                        <h3> {file.size } Bytes</h3>
                        <p> {file.content} </p>
                    </li>)
                )}
            </ul>
        )
    }
}

export default List;