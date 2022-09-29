import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }
    setText = (value) =>{
        this.setState({
            text: value
        })
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea handleChange={this.setText} content={ text } />
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));