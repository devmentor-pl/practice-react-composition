import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    onChange = (textRef) => {
        this.setState({ text: textRef.current.value })
    }

    render() {
        return (
            <Textarea onChange={this.onChange} />
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));