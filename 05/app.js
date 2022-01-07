import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    getText = (e) => {
        this.setState({text: e.target.value})
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea  ref={this.textAreaReference} onChange ={this.getText} />
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));