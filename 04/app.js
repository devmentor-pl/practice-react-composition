import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    getDataFiles = () => {
        this.setState({ 
            filesList: [...this.state.filesList, {
                name: 'ala.txt',
                size: '100',
                content: 'Ala ma kota'
            }] 
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