import React from 'react';
import { v4 as uuid } from 'uuid';

class File extends React.Component {
    
    handleChange = e => {
        const{addFileToState} = this.props;
        const file = e.target.files[0]
        const reader = new FileReader();
        
        reader.onload = function (readerEvent) {

            const content = readerEvent.target.result;
            const {size, name} = file;
            const fileData = {size, name, content, id: uuid()}
            
            addFileToState(fileData);
        }

        reader.readAsText(file);

    }

    render() {
        return <input type="file" onChange={this.handleChange} multiple />
    }
}

export default File;

