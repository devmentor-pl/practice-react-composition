import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: []
    }

    addFiles = (e) => {
        for(let file of e.target.files) {
            const reader = new FileReader();

            reader.onload = () => {
                const { name, size, type } = file;
                const newFile = { name, size, type };
                const { filesList } = this.state;

                this.setState({
                    filesList: [...filesList, newFile]
                })
            }
            reader.readAsText(file);
        }
    }

    render() {
        return (
            <section>
                <File onClick={ this.addFiles } />
                <List children={ this.state.filesList } />
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));