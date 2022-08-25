import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    addFiles = files => {
        this.setState(state => {
            return { filesList : [...state.filesList, ...files]}
        })
    }

    render() {
        return (
            <section>
                <File addFiles={ this.addFiles }/>
                <List files={ this.state.filesList }/>
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));