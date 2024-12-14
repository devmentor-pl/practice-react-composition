import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    };
    handleFileAdd = (newFile) => {
        this.setState((prevState) => ({
            filesList: [...prevState.filesList, newFile],
        }));
    };

    render() {
        return (
            <section>
                <File onFilesLoaded={this.handleFileAdd} />
                <List files={this.state.filesList} />
            </section>
        );
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
