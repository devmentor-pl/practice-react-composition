import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    textAreaChange = (content) => {
        this.setState({
            text: content
        })
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea textAreaChange={this.textAreaChange} content={text} />
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
