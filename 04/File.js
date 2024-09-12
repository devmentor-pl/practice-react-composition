import React from 'react';
import {v4 as uuid} from 'uuid';


class File extends React.Component {

    handleFile = e => {
        e.preventDefault();
        const file = this.input.files[0];
        if(file && file.type.includes('text')) {
            const reader = new FileReader();
            reader.readAsText('file', 'UTF-8');
            reader.onload = () => {
                const addedFile = {
                    id:uuid(),
                    name: file.name,
                    size: file.size,
                    txt: reader.result
                }
            const {addFile} = this.props;
            addFile(addedFile);
            }
        } else {
            alert('Please choose a text file.')
        }
    }

    render() {
        return (
            <input 
                type="file" 
                multiple 
                onChange={this.handleFile}
                ref={ node => this.input = node }
            />
        )
    }
}

export default File;