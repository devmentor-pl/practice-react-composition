import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }
    addFileObject = (fileObj) => {
        this.setState((prevState) => ({
            filesList: [...prevState.filesList, fileObj],
          }));
    }   
    render() {
        const { filesList } = this.state
        return (
            <section>
                <File addFileObject={this.addFileObject}/>
                <List data={ filesList }/>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
