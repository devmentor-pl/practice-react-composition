import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }


    changeTextArea = (newContent) => {
        this.setState({
            text: newContent
        })
    }


    render() {
        const { text } = this.state;
        return (
            <Textarea content={ text }  changeTextArea={this.changeTextArea}/>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));