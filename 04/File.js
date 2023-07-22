import React from 'react';

class File extends React.Component {
    render() {
        const { addFile } = this.props
        return <input
            type="file"
            multiple
            onChange={addFile}
        />
    }
}

export default File;