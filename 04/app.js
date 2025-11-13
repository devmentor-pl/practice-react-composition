import React from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuidv4 } from "uuid";
import File from './File';
import List from './List';

class App extends React.Component {
    
    state = {
        filesList: [],
    }
    
    
    handleFilesChange = (selectedFiles) => {
        console.log("Wybrano pliki:", selectedFiles);
        Array.from(selectedFiles).forEach((file) => {
            if (file.type.startsWith("text")) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    this.setState((prevState) => ({
                        filesList: [
                            ...prevState.filesList,
                            {
                                id: uuidv4(),
                                name: file.name,
                                size: file.size,
                                content: event.target.result,
                            },
                        ],
                    }));
                };
                reader.readAsText(file);
            }
        });
    }

    render() {
        return (
            <section>
                <File onFilesSelected={this.handleFilesChange}/>
                <List filesList={this.state.filesList}/>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
