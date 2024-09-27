import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class File extends React.Component {

    refInput = React.createRef()
    
    fileReadHandling = () => {
        [...this.refInput.current.files].forEach(file => {
            if(file.type.includes('text')) {
            const reader = new FileReader();
            console.log(reader)
            reader.onload = () => {
                const data ={
                    name: file.name,
                    size: file.size,
                    content: reader.result,
                    id: uuidv4(),
                }
                this.props.addFile(data);
            };
              reader.readAsText(file);
            }
        })


    }

    render() {
        return <input onChange={this.fileReadHandling} ref={this.refInput} type="file" multiple />
    }
}

export default File;