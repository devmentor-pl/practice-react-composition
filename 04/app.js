import React from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuid } from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    handleFile = (ev) => {
        const files = Array.from(ev.target.files)
        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                const data = {
                    id: uuid(),
                    size: file.size,
                    text: reader.result
                };
                this.addFile(data)
            }
            reader.readAsText(file)
        })
    }

    addFile = (file) => {
        this.setState((state) => {
            return {
                filesList: [...state.filesList, file]
            }
        })
    }

    render() {
        return (
            <section>
                <File onChange={this.handleFile} />
                <List items={this.state.filesList} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
