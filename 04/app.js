import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    addFile = (file) => {
        this.setState(state => {
            return{
        filesList: [...state.filesList, file]
            };
        });
    }

    render() {
        const  { filesList } = this.state;
        console.log(filesList);
        return (
            <section>
                <File add={this.addFile} />
                <List elements={filesList}/>
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));