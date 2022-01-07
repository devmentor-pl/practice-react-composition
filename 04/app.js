import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    getFile = (e) => {
        const file = Array.from(e.target.files);
        file.forEach(element => {
            
            if(element && element.type.includes('text')) {
            const reader = new FileReader();
            reader.readAsText(element);

            reader.onload = () => {

                const dataFile = {
                    id: uuid(),
                    name: element.name,
                    content: reader.result,
                    size: element.size
                }

                this.setState({
                    filesList: [...this.state.filesList, dataFile]
                });
            }
        }
        }); 
    }

    render() {
        return (
            <section>
                <File fileHandle = {this.getFile}/>
                <List data={this.state.filesList}/>
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));