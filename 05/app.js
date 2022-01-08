import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
    }

    textareaRef = React.createRef();

    onChange = (text) => {
        this.setState( state => {
            return {
                text: [...state.text , text]
            }
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        const { scrollHeight , style } = this.textareaRef.current

        if(snapshot.isResize) {
            style.height = `${scrollHeight}px`;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        const { offsetHeight , scrollHeight } = this.textareaRef.current;

        return {
            isResize: ( offsetHeight < scrollHeight && offsetHeight <= 100) ? true : false
        }
    }

    render() {
        const { text } = this.state;

        return (
            <Textarea onChange={this.onChange} content={ text } ref={this.textareaRef}/>
        )
    }

}

ReactDOM.render(<App/>, document.querySelector('#root'));