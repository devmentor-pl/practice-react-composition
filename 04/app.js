import React from 'react';
import ReactDOM from 'react-dom';
import {v4 as uuid} from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    addFile = (file) => {
        let newFile = {...file, id: uuid()}

        this.setState(state => {
            return {
                filesList: [...state.filesList, newFile]
            };
        })
    }

    render() {
        return (
            <section>
                <File getFiles = {this.addFile} />
                <List itemList = {this.state.filesList}/>
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));