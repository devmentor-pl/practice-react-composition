import React from 'react';
import ReactDOM from 'react-dom';

import {v4 as uuid} from 'uuid';
import File from './File';
import List from './List';
import ListItem from './ListItem';

class App extends React.Component {
    state = {
        filesList: [],
    }

    render() {
        const {filesList} = this.state;
        return (
            <section>
                <File onChange={this.readFile} />
                <List >
                    {filesList.map(file => <div key={file.id}><ListItem name={file.name} content={file.content} size={file.size}/></div>)}
                </List>
            </section>
        )
    }

    readFile = e => {
        const file = e.target.files[0];
        
        if(file && file.type.includes('text')) {
            const reader = new FileReader();

            reader.onload = readerEvent => {
                const content = readerEvent.target.result;
                const newFile = {id: uuid(), name: file.name, content: content, size: file.size};
                this.setState({
                    filesList: [...this.state.filesList, newFile],
                });
            };
            reader.readAsText(file, 'UTF-8');
        } else {
            alert('Wybierz plik tekstowy!')
        }
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));