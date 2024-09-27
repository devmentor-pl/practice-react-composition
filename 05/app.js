import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    textAreaOnChange = (newText) => {
        this.setState(({text: newText}))
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea change={this.textAreaOnChange} content={ text } />
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
