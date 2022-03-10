import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    render() {
        return (
            <section>
                <File addFileData={this.addFileData}/>
                <List data={this.state.filesList}/>
            </section>
        )
    }

    addFileData = newFile => {
        const {filesList} = this.state;
        this.setState({
            filesList:[...filesList,newFile] 
        })
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));