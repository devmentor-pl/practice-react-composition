import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    addFile(file){
        this.setState(prevState => {
            return {filesList: [...prevState, ...file]}
        })
    }

    render() {
        const {filesList} = this.state
        return (
            <section>
                <File addFile={(file) => this.addFile(file)}/>
                <List files={filesList} />
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));