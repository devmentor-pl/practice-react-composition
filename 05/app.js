import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea content={ text } ref={ref => this.refText = ref}
            getContent={this.getContent} />
        )
    }

    getContent = content => {
        this.setState({
            text: content 
        })
    }

    getSnapshotBeforeUpdate() {
        return {
            height: this.refText.offsetHeight,
            scrollHeight: this.refText.scrollHeight
        }
    }

    componentDidUpdate() {

        const textHight = this.refText.getHeight()
        const textScrollHeight = this.refText.getScrollHeight()
     
        if(textHight < textScrollHeight) {
            this.refText.refText.style.height = textScrollHeight + 'px';
            this.refText.refText.style.maxHeight = '100px';
        } 
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));