import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    addFile = (file) => {
        console.log(file)
        this.setState({
            filesList: [...this.state.filesList, file]
        })
    }

    render() {
        return (
            <section>
                <File addFiles={this.addFile} />
                <List items={this.state.filesList} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
