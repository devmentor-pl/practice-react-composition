import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }
    
    handleChange = e => {
        this.setState({ text: e.target.value });
    };

    render() {
        return (
            <Textarea value={this.state.text} onChange={this.handleChange} />
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
