import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class File extends React.Component {
    handleFileChange = (e) => {
        const { files } = e.target;
        [...this.input.files].forEach((file) => {
            const reader = new FileReader();
            const id = uuidv4();
            reader.addEventListener('load', () => {
                const newFile = {
                    id: id,
                    name: file.name,
                    size: file.size,
                    content: reader.result,
                };
                this.props.onFilesLoaded(newFile);
            });
            reader.readAsText(file);
        });
    };
    render() {
        return (
            <input
                type="file"
                ref={(element) => (this.input = element)}
                multiple
                onChange={this.handleFileChange}
            />
        );
    }
}