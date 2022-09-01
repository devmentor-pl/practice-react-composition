import React from 'react';
import {v4 as uuid} from 'uuid';

class File extends React.Component {
    inputHandler = e => {
        const files = [...this.input.files]

        files.forEach(file => {
            if(file.type.includes('text')) {
                const reader = new FileReader()
                reader.addEventListener('load', () => {
                    const data = {
                        id: uuid(),
                        name: file.name,
                        size: file.size,
                        content: reader.result
                    }
                    this.props.addFile(data)
                })
                reader.readAsText(file, "UTF-8")
            } else {
                alert("Nieprawidłowe rozszerzenie pliku.")
            }
        })        
    }

    render() {
        return (
            <input 
                type="file" 
                onChange={this.inputHandler}
                ref={el => this.input = el}
                multiple 
            />
        )
    }
}

export default File;