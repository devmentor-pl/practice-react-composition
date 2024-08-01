import React from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuid } from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    render() {
        return (
            <section>
                <File onChange={this.updateState} />
                <List data={this.state.filesList}/>
            </section>
        )
    }

    updateState = (e) => {
        Promise.all(Array.from(e.target.files).map(file =>
            this.fileReader(file)
                .then(({ name, content, size}) => ({
                    id: uuid(),
                    name,
                    content,
                    size
                }))
        ))
            .then(files => {
                this.setState(prevState => ({
                    filesList: [...prevState.filesList, ...files]
                }), () => console.log(this.state.filesList, "hello"))
            })
            .catch(error => console.error('Nie dziala:', error))
    }

    fileReader = (file) => {
        return new Promise((resolve, reject) => {
            const fr = new FileReader()
            fr.onload = () => resolve({
                name: file.name,
                content: fr.result,
                size: file.size
            })
            fr.onerror = () => reject(err)
            fr.readAsText(file)
        })
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
