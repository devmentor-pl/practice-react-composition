import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid'

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    readFiles = (e) => {
        const file = e.target.files[0];

        if(file && file.type.includes('text')) {
            const reader = new FileReader();
            reader.readAsText(file);
            
            reader.onload = () => {
                
                const fileInformation = {
                    id: uuid(),
                    name: file.name,
                    content: reader.result,
                    size: file.size
                }


                this.setState({
                    filesList: [...this.state.filesList, fileInformation]
                });
            }

        }

   
    }

    render() {
        return (
            <section>
                <File fileHandle = {this.readFiles}/>
                <List data={this.state.filesList}/>
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));