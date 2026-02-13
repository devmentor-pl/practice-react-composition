import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

import './main.css';

class App extends React.Component {
    state = {
        filesList: [],
    }

    addFile = (fileData) => {
        this.setState((prevState) => ({
            filesList: [...prevState.filesList, fileData]
        }))
    }


    render() {
        return (
            <section>
                <File onFileLoad={this.addFile}/>
                <List files={this.state.filesList} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
