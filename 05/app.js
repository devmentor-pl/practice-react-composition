import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
        rows: 2,
    }

    getSnapshotBeforeUpdate() {    
        const { offsetHeight, scrollHeight } = this.textareaEl
        if (offsetHeight < scrollHeight && offsetHeight < 100) {
            return this.resize = true
        }
        return this.resize = false
    }

    componentDidUpdate() {
        const { offsetHeight, scrollHeight } = this.textareaEl
        if (offsetHeight < scrollHeight && this.resize) {
            this.setState({
                rows: this.state.rows + 1
            })
        }
    }

    changeState = (name) => {
        this.setState({
            [name]: this.textareaEl.value
        })
    }

    render() {
        const { text, rows } = this.state;
        return (
            <Textarea
                content={text}
                reference={el => this.textareaEl = el}
                onChange={(e) => { this.changeState('text') }}
                rows={rows}
            />
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
