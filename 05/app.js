import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    addText = (newText) => {
        console.log(newText)
        this.setState({ text: newText });
    }

    render() {
        console.log(this.state)
        const { text } = this.state;
        window.addText = this.addText
        return (
            <div>
                <Textarea content={ text } addText={this.addText} />
                <br />
                {this.state.text}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));