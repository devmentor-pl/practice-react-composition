import React from 'react';

class File extends React.Component {
    render() {
        const {submit} = this.props;
        return <input onChange={e => {submit(e)}} type='file' multiple/>
    }
}

export default File;