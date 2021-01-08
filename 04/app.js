import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    addFiles = (filesList) => {
        const newFilesList = [...this.state.filesList, ...filesList]

        this.setState({ filesList: newFilesList })
    }

    render() {
        return (
            <section>
                <File addFiles={ this.addFiles } />
                <List filesList={ this.state.filesList } />
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));