import propTypes from 'prop-types';
import React from 'react';

class File extends React.Component {
    readFile = e => {
        const newFile = e.target.files[0];
        console.log(newFile);
        const reader = new FileReader(); 
            reader.onload = (readerEvent) => {
                // const size = newFile.size;
                // console.log(size);
                const content = readerEvent.target.result;
                const fileData = {
                    name: newFile.name,
                    size: newFile.size,
                    content
                }
                
                this.props.getFiles(fileData);
            }  
                reader.readAsDataURL(newFile);
    
    }
    
    render() {
        return (
            <form onChange={ this.readFile }>
                <input type="file" multiple ref={ node => this.input = node }/>
            </form>
        )
    }
}

export default File;