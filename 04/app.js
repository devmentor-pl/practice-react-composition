import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';
import { v4 as uuid } from 'uuid';

class App extends React.Component {
    state = {
        filesList: [],
    }

    render() {
        return (
            <section>
                <File onChange={this.addFileDataToState}/>
                <List data={this.state.filesList}/>
            </section>
        )
    }

    addFileDataToState = (data) => {
        Object.values(data).map( file => {
            if( file && file.type.includes('text') ) {

                const reader = new FileReader();

                reader.onload = (readerEvent) => {
                    const fileData = {
                        name: file.name,
                        size: file.size,
                        content: readerEvent.target.result,
                        id: uuid()
                    };

                    this.setState( state => {
                        return {
                            filesList: [...state.filesList , fileData]
                        }
                    });
                }
                reader.readAsText(file, 'UTF-8')
            } else {
                alert('You must chose text files');
            }
        })
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));