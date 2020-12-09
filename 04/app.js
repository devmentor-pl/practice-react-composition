import React from 'react';
import ReactDOM from 'react-dom';
import File from './File';
import List from './List';
// import data from './static/article.txt'

class App extends React.Component {
    state = {
        filesList: [],
    }
    handleFilesSubmit(newObject) {
        this.setState(state => {
            return {
                filesList: [...state.filesList, newObject]
            }
        })
    }
    render() {
        return (
            <section>
                <File getFile={ this.handleFilesSubmit.bind(this) }/>
                <List files={ this.state.filesList }/>
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));