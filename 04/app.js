import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    render() {
        return (
            <section>
                <File addFile={this.addFile}/>
                <List data={this.state.filesList}/>
            </section>
        )
    }

    addFile = file => {
        const { filesList } = this.state
        this.setState({ 
            filesList: [...filesList, file]
        })
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
