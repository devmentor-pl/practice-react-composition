import React from 'react';

class File extends React.Component {
    render() {
        const {add} = this.props;
        return <input onChange={(e)=> add(e)} type="file" accept="text/plain" multiple />
    }
}

export default File;