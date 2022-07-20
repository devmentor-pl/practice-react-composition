import React from 'react';
import { v4 as uuid } from 'uuid'

class File extends React.Component {
    handleFilesSubmit = event => {
        event.preventDefault();
        const files = Array.from(event.target.files);
        files.map(file => {
            if (file.type === 'text/plain') {
                const newObj = this.readFile(file);
            }
        })
    }
    readFile = (file) => {
        const { getFile } = this.props;
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            const innerText = reader.result;
            const newObj = this.createObject(file, innerText);
            this.props.getFile(newObj)
        };
    }
    createObject(fileData, innerText) {
        const { name, size, type, lastModifiedDate: date } = fileData;
        return {
            name,
            size,
            type,
            date,
            id: uuid(),
            text: innerText
        }
    }
    render() {
        return (<input
                    type="file"
                    multiple
                    onChange={ this.handleFilesSubmit }
                />)
    }
}

export default File;