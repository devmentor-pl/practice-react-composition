import React from 'react';
import { readFiles } from  './mutliFiles'

class File extends React.Component {

    handleChange = () => {
        const { addFiles } = this.props;     
                        
        readFiles(this.input.files)
            .then(files => addFiles(files))
            .catch(err => alert(err));
    }

    render() {
        return ( 
            <input type="file" 
            ref={ node => this.input = node } 
            onChange = { this.handleChange } 
            multiple/>
        )
    }
}

export default File;