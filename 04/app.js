import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    };

    showFileInfo = files => {
        [...files].forEach(file => this.isFileValid(file) ? this.createNewFileInfo(file) : alert('Only text files are accepted!'));
    };

    render() {
        return (
            <section>
                <File addFile={this.showFileInfo} />
                <List files={this.state.filesList} />
            </section>
        );
    };

    isFileValid(file) {
        return file && file.type.includes('text');
    };

    createNewFileInfo(file) {
        const reader = new FileReader();
        reader.onload = readerEvent => {
            const content = readerEvent.target.result;
            const { name, size } = file;
            const newFileInfo = {
                name,
                size: (size / (1024 * 1024)).toFixed(3),
                content,
                id: uuid(),
            };
            this.setState({
                filesList: [...this.state.filesList, newFileInfo]
            });
        };
        reader.readAsText(file, 'UTF-8');
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));