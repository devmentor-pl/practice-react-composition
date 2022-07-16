import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }
   
    changeState = (item) => {
        const filesList = [...this.state.filesList];
        this.setState({
            filesList: [...filesList, item]
        });
    }

    render() {
        return (
            <section>
                <File changeState={this.changeState}/>
                <List filesList={this.state.filesList}/>
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));