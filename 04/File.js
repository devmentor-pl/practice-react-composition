import React from 'react';

class File extends React.Component {
    
    render() {
        const {fileHandle} = this.props
        return <input onChange={(e) => fileHandle(e) } type="file" multiple />
    }
}

export default File;