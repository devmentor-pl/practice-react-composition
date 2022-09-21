import React from 'react';

class File extends React.Component {


    render() {

        const { onChangeFile } = this.props

        return <input onChange={onChangeFile} type="file" multiple />
    }
}

export default File;