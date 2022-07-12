import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    getDataFiles = (dataFiles) => {
        this.setState({ 
            filesList: [...this.state.filesList, dataFiles] 
        });
    }

    render() {
        return (
            <section>
                <File getDataFiles={this.getDataFiles} />
                <List />
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));