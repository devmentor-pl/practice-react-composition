import React from 'react';

class File extends React.Component {
    handleTxtFiles = (e) => {
        const { getDataTxtFile } = this.props;
        e.preventDefault();
        const file = this.input.files[0];
        console.log(file);
        if (file && file.type.includes('text')) {
            const reader = new FileReader();
            reader.onload = (readerEvent) => {
                const content = readerEvent.target.result;
                getDataTxtFile(file.name, file.size, content);

            };
            reader.readAsText(file,'UTF-8')
        } else {
            console.log('Choose right file');
        }
     };
    render() {
        return (
            <form onSubmit={this.handleTxtFiles}>
                <input ref={node => this.input = node} type="file" multiple/>
                <input type="submit"/>
            </form>
        )
    }
}

export default File;