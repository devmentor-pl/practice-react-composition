import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {    
    state = {
        text: '',
    }    

    changeText = value => {
        this.setState( {text : value} )
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea content={ text } onChange={ this.changeText } heightRange={{ min : 45, max: 100 }} />
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));