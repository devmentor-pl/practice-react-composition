import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class File extends React.Component {

    handleChange = (e) => {
        [...this.input.files].forEach(file => {
            if(file.type.includes('text')) {

                const reader = new FileReader()
                reader.addEventListener('load', () => {
                    const fileData = {
                        content: reader.result,
                        name: file.name,
                        size: file.size,
                        id: uuidv4(),
                    }
                    this.props.addFileToList(fileData)
                }, false)

                reader.readsAsText(file)



                
            }
        })
    }



    render() {
        return <input onChange={this.handleChange} ref={element => this.input=element} type="file" multiple />
    }
}

export default File;