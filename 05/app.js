import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea content={text} onChange={ev => this.setState({ text: ev.target.value })} />
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
