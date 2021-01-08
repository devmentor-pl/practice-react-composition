import React from 'react';

import {v4 as uuid} from 'uuid';

class File extends React.Component {
    inputRef = React.createRef()
    addFiles = this.props.addFiles

    onChange = () => {
        const files = this.inputRef.current.files
        const filesList = []

        for(let i=0; i<files.length; i++) {
            filesList.push({ 
                id: uuid(), 
                fileName: files[i].name, 
                fileSize: files[i].size 
            })
        }
        this.addFiles(filesList)
    }
    render() {
        return <input type="file" multiple onChange={ this.onChange } ref={ this.inputRef } />
    }
}

export default File;