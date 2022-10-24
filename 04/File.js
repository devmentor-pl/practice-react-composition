import React from 'react';

class File extends React.Component {
    render() {
        const {addFile}= this.props
        return <input type="file" multiple ref={ref => this.input = ref} onChange={addFile}/>
    }
}

export default File;