import React from 'react';
import {v4 as uuid} from 'uuid';

class File extends React.Component {
    render() {
        return(
            <input type="file" multiple onChange={this.handleSubmit} ref={input => this.input = input}/>
        )
    }

    handleSubmit = e => {
        e.preventDefault();
        const file = this.input.files[0];
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = () => {
            const newFile = {
                name:file.name,
                size:file.size,
                text:reader.result,
                id:uuid()
            }
        const {addFileData} = this.props;
        addFileData(newFile);
        }
    }
}

export default File;