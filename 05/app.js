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
            <Textarea content={text} onChange={this.handleChange}/>
        )
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value})
    }    
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
