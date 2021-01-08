import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    updateText = (newText) => {
        this.setState({ text: newText })
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea content={ text } updateText={ this.updateText } />
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));