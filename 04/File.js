import React from 'react';
import { v4 as uuidv4 } from 'uuid'

class File extends React.Component {
    getInfo = (event) => {
        const files = [...this.input.files]
        files.forEach(file => {
            if (file.type.includes('text')) {
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                    const data = {
                        name: file.name,
                        size: file.size,
                        content: reader.result,
                        id: uuidv4(),
                    }
                    this.props.addFiles(data)
                }, false);
                reader.readAsText(file);
            }
        })
    }
    render() {
        return <input onChange={this.getInfo} ref={element => this.input = element} type="file" multiple />
    }
}

export default File;