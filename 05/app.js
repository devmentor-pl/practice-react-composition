import React from 'react';
import { createRoot } from 'react-dom/client';

import Textarea from './Textarea';

class App extends React.Component {
    txtRef = React.createRef();

    state = {
        text: '',
    }

    handleChange = event => {
        const value = event.target.value;

        this.setState(() => {
            return {
                text: value,
            };
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const offsetHeight = this.txtRef.current.getOffsetHeight();
        const resize = offsetHeight < 100 ?
            { resize: true }
            :
            { resize: false };

        return resize;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { resize } = snapshot;

        if (resize) this.resizeTextarea();
    }

    resizeTextarea() {
        const textarea = this.txtRef.current.txtRef.current;
        const offsetHeight = this.txtRef.current.getOffsetHeight();
        const scrollHeight = this.txtRef.current.getScrollHeight();

        if (offsetHeight < scrollHeight) {
            textarea.style.height = `${scrollHeight}px`;
        }
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea
                ref={this.txtRef}
                onChange={this.handleChange}
            />
        );
    }
}

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
