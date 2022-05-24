import React from 'react';
import {v4 as uuid} from 'uuid';

class File extends React.Component {
    showFile = (e) => {
        const file =  e.target.files[0]

        if(file && file.type.includes('text')) {
            const reader = new FileReader();
            const {changeState} = this.props
            
            reader.onload = function(readerEvent) {
                const content = readerEvent.target.result;
                changeState({content, name: file.name, size: file.size, id: uuid()})
            }

            reader.readAsText(file, 'UTF-8')
        } else {
            alert('text file only')
        }
    }

    render() {
        return <input ref= {el => this.inputRef = el} onChange={this.showFile} type="file" multiple />
    }
}

export default File;