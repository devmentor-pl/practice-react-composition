import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    handleChange = content => {
        this.setState ({
            text: content,
        })
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea 
                content={ text } 
                handleChange={ this.handleChange }
            />
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));