import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
        height: 50
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const height = this.textarea.getHeight();
        if(height <= 100) {
            return {resize: true}
        } else {
            return {resize: false}
        }
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        const resize  = snapshot.resize;
        const height = this.textarea.getHeight();
        const scrollHeight = this.textarea.getScrollHeight();
        console.log(`height: ${height}, scroll: ${scrollHeight}`);
        if(height < scrollHeight && resize === true) {
            this.setState({height: this.state.height + 1})
        }
    }

    handleTextarea = (text) => {
        this.setState({text: text});
    }

    render() {
        const { text } = this.state;
        const myStyle = {height: this.state.height + 'px'};
        return (
            <Textarea ref = {ref => this.textarea = ref} onChange = {this.handleTextarea} content={ text } style = {myStyle} />
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));