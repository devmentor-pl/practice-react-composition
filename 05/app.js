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
            <Textarea content={ text } addText={this.addText} />
        )
    }

    addText = newText => {
        this.setState({
            text: newText
        })
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));