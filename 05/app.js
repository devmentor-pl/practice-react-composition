import { func } from 'prop-types';
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
            <Textarea content={text} event={this.stateUpdated} />
        )
    }

    stateUpdated = (value) => {
        this.setState({
            text: value,
        })
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));