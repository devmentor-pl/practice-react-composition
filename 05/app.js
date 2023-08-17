import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    updateState = (value) => {
        this.setState({ text: value })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const height = this.textareaRef.getOffsetHeight()
        const resize = height < 100
        return { resize }
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        const offsetHeight = this.textareaRef.getOffsetHeight()
        const scrollHeight = this.textareaRef.getScrollHeight()
       
        if (offsetHeight < scrollHeight && snapshot.resize) {
            this.textareaRef.changeElementHeight()
        }
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea content={text} ref={ref => this.textareaRef = ref} updateState={this.updateState} />
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);