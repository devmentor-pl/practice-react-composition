import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }
    addFile = (e) => {
        const files = e.target.files;
        Object.keys(files).forEach(i => {
            const file = files[i];
            const name = file.name;
            const size = file.size;
            const reader = new FileReader();
            
            reader.onload = e => {
                const result = e.target.result
                this.setState(state => {
                    const newList = [...state.filesList, {name: name, size: size, content: result}];
                    return {filesList: newList}
                })
            }
            reader.readAsText(file, 'UTF-8');
        })
    }
    render() {
        return (
            <section>
                <File add={this.addFile}/>
                <List list={this.state.filesList}/>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
