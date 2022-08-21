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
            <Textarea content={ text } ref={ref => this.refArea = ref} getText={this.getText}/>
        )
    }

    getText = text => {
        this.setState({
            text: text,
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return {
            offsetHeight: this.refArea.getHeight(),
            scrollHeight: this.refArea.getScrollHeight(),
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.refArea.getHeight() < this.refArea.getScrollHeight()) {
            this.refArea.refArea.style.height = this.refArea.getScrollHeight() + 'px';
            this.refArea.refArea.style.maxHeight = '100px';
        }
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));