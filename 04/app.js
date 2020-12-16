import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    handleFileLoad = (e) => {
        const files = e.target.files;

        Object.keys(files).forEach(i => {
            const file = files[i];
            if (file && file.type.includes('text')) {
                const reader = new FileReader();
                reader.readAsText(file, 'UTF-8');
                reader.onload = () => {
                    const loadedFile = {
                        name: file.name,
                        size: file.size,
                        content: reader.result
                    }
                    this.setState({ filesList: [...this.state.filesList, loadedFile] })
                }
            }
        })

    }


    render() {
        return (
            <section>
                <File onSubmit={this.handleFileLoad} />
                <List files={this.state.filesList} />
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));