import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';
import {v4 as uuid} from 'uuid';

class App extends React.Component {
    state = {
        filesList: [],
    }

    handleFile = (file) => {
        this.setState((state) => {
            return {
                filesList: [...state.filesList, file]
            }
        })
    }
    

    render() {
        return (
            <section>
                <File getFile={this.handleFile}/>
                <List files= {this.state.filesList} />
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));