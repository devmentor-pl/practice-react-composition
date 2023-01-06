import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [{id: 'Some Number' , name: 'Some File', size: '1 mb'}],
    }

    render() {
        return (
            <section>
                <File />
                <List items={this.state.filesList}/>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
