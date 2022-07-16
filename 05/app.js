import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    getText = (e) => {
        const { value } = e.target;
        this.setState({
            text: value
        })
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea 
                content={ text }
                onChange={ this.getText } />
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));