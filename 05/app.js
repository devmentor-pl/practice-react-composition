import React from 'react';
import ReactDOM from 'react-dom';
import { useDebugValue } from 'react/cjs/react.production.min';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: ''
    }

    changeState = (value) => {
        this.setState({
            text: value
        })
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea content={ text } height={ this.state.height } changeState={ this.changeState }/>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));