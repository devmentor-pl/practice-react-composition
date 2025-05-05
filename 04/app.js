import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';
import {v4 as uuid} from 'uuid'

class App extends React.Component {
    state = {
        filesList: [],
    }

    handleReaderFile = (file) => {

        const reader = new FileReader();

        reader.onload = () => {
            
            const fileData = {
                id: uuid(),
                content: reader.result,
                fileSize: `${file.size} B`,
                fileName:  file.name
            }

            this.setState(state => {

                return {
                    filesList: [...state.filesList, fileData ]
                }
            },() => {
                console.log(this.state);
            })

          };
          reader.onerror = () => {
            showMessage("Error reading the file. Please try again.", "error");
          };
          reader.readAsText(file);

    }

    render() {
        return (
            <section>
                <File handleReaderFile={this.handleReaderFile}/>
                <List files ={this.state.filesList}/>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
