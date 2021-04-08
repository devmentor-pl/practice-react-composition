import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: '',
        height: 40,
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');

        if (this.refTextarea.getHeight() < this.refTextarea.getScrollHeight() && this.refTextarea.getScrollHeight() < 100) {
            return {
                resize: true
            }
        }
        return {
            resize: false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');

        if (snapshot.resize) {
            this.state.height = this.refTextarea.getScrollHeight() + 'px';
        }

    }


    handleOnChange = e => {
        this.setState({
            text: e.target.value,
        });
    }


    // rozwiązanie w JS

    // prepareHeight = e => {
    //     const item = e.target;
    //     if (item.scrollHeight > item.offsetHeight) {
    //         if (item.scrollHeight < 100) {
    //             item.style.height = item.scrollHeight + 'px';
    //         }
    //     }
    // }



    render() {
        const { text, height } = this.state;
        return (
            // <Textarea onInput={this.prepareHeight} />  //rozwiązanie w JS
            <Textarea content={text} ref={el => this.refTextarea = el} onChange={this.handleOnChange} height={height} />
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));