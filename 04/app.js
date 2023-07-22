import React from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    addFile = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const file = e.target.files[i]

            if (file && file.type.includes('text')) {
                const reader = new FileReader

                reader.onload = (event) => {
                    this.setState((prevState) => {

                        return {
                            filesList: [
                                ...prevState.filesList,
                                {
                                    name: file.name,
                                    size: file.size,
                                    body: event.target.result,
                                    id: uuidv4(),
                                }
                            ]
                        }
                    })
                }
                reader.readAsText(file)
            }
        }

    }

    render() {
        return (
            <section>
                <File addFile={(e) => this.addFile(e)} />
                <List filesList={this.state.filesList} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
