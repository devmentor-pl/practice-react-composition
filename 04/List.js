import React from 'react';

class List extends React.Component {
    render() {
        const { files } = this.props;
        
        return (
            <ul>                
                {files.map(file => <li>{ file.content }</li>)}
            </ul>
        )
    }
}

export default List;