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
            <section >
                <File event={this.fileHandle}/>
                <List data={this.state.filesList}/>
            </section>
        )
    }

    fileHandle = (file) => {
        const {filesList} = this.state;

        if(file && file.type.includes('text')) {

            const reader = new FileReader();
            reader.readAsText(file, 'UTF-8');

            reader.onload = (readEvent) => {
                const newTextFile = {
                    name: file.name,
                    size: file.size,
                    text: readEvent.target.result,
                }
                this.setState({
                    filesList:[...filesList, newTextFile]
                });
            }
        }
        else {
            alert('Please, choose text type file');
        }
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));