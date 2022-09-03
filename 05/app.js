import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    onChange = (content) => {
        this.setState({
            text: content
        })
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea onChange={this.onChange}
            content={ text } />
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));