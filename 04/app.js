import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    insertFiles = (file) => {
        console.log(file, this.state.filesList, "!")
        this.setState((currentState) => {
            
            return { filesList: [...currentState.filesList, file] };

        })
    }

  


    render() {
        console.log(this.state.filesList)
        
        return (
           
            <section>
                <File add={this.insertFiles}/>
                <List items={this.state.filesList}/>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
