import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
        textareaHeight: 'inherit'
    };

    getSnapshotBeforeUpdate() {
        return this.teaxtarea.getTextareaHeight() < 100 ?
            { resize: true } :
            { resize: false };
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot.resize) {
            const textareaHeight = this.teaxtarea.getTextareaHeight();
            let scrollHeight = this.teaxtarea.getScrollHeight();
            if (textareaHeight < scrollHeight) {
                this.resizeTextarea(scrollHeight);
            };
        };
    };

    resizeTextarea(height) {
        this.setState({
            textareaHeight: `${height}px`
        });
    };

    setTextState = () => {
        const content = this.teaxtarea.getContent();
        this.setState({
            text: content
        });
    };

    render() {
        const { text, textareaHeight } = this.state;
        const style = { height: textareaHeight }
        return (
            <Textarea
                ref={el => this.teaxtarea = el}
                content={text}
                onChange={this.setTextState}
                style={style}
            />
        );
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));