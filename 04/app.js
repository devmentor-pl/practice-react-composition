import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    addData = (data) => {
        this.setState(({
            filesList: [...this.state.filesList, data]
        }))
    }

    render() {
        const {filesList} = this.state
        return (
            <section>
                <File addData={this.addData}/>
                <List items={filesList}/>
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));