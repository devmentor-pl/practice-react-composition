import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    getInfo = (files) => {
        this.setState({filesList: files}) // skoro nie robimy usuwania to rozumiem, że dane mają byc nadpisywane 
    }

    render() {
        return (
            <section>
                <File onChange={this.getInfo}/>
                <List items ={this.state.filesList}/>
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));