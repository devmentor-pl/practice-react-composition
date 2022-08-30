import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    addFile = (file) => {
        this.setState({
            filesList: [...this.state.filesList, file],
        })
    }

    render() {
        return (
            <section>
                <File addFile={this.addFile}/>
                <List items={this.state.filesList}/>
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));