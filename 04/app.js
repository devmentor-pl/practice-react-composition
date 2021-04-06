import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    readFile = e => {
        for (let i = 0; i < e.target.files.length; i++) {
            const file = e.target.files[i];

            let infoFile = {};
            if (file && file.type.includes('text')) {
                const reader = new FileReader();
                reader.onload = function (readerEvent) {
                    const content = readerEvent.target.result;

                    infoFile = {
                        id: uuid(),
                        name: file.name,
                        size: file.size,
                        content: content,
                    }
                };
                reader.readAsText(file, 'UTF-8');

                setTimeout(() => { this.addFile(infoFile) }, 500);
            }
        }
    }

    addFile = (file) => {
        this.setState(state => {
            return {
                filesList: [...state.filesList, file],
            };
        }, () => {
            console.log(this.state.filesList);
        });
    }

    render() {
        const { filesList } = this.state;
        return (
            <section>
                <File onChange={this.readFile} />
                <List items={filesList} />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));