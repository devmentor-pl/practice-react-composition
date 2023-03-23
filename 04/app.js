import React from 'react';
import { v4 as uuid } from "uuid";
import { createRoot } from 'react-dom/client';
import ReactFileReader from 'react-file-reader';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }
    showFile = (e) => {
        const files = [...e.target.files];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target.result;
                const fileData = {
                    name: file.name,
                    size: file.size,
                    content: content,
                    id: uuid(),
                };
                this.setState((state) => {
                    return {
                        filesList: [...state.filesList, fileData]
                    };
                })
            };
            reader.readAsText(file);
        }

    }

    render() {
        const { filesList } = this.state;
        return (
            <section>
                <File handleChange={this.showFile} />
                <List data={filesList} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);

