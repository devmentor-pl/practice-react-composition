import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }
    constructor() {
        super()
        this.resize = false
    }

    updateState = (value) => {
        this.setState({
            text: value
        })
    }

    getSnapshotBeforeUpdate = (value) => {
        // console.log(offsetHeight < scrollHeight)
        // if (offsetHeight < scrollHeight) {
        //     return { resize: true }
        // } else {
        //     return { resize: false }
        // }
        this.resize = value
        // return { resize: value }
    }

    componentDidUpdate = () => {
        console.log(this.resize)
        // console.log(this.getSnapshotBeforeUpdate())
    }

    render() {

        const { text } = this.state;
        return (
            <Textarea content={text} ifResize={this.getSnapshotBeforeUpdate} updateState={this.updateState} />
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
