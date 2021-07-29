import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: [],
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnap');

        return {
            height: this.refUl.offsetHeight,
        }
    }

   

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot.height)
        console.log(this.refUl.offsetHeight)
    }

    render() {
        console.log('render')
        const { text } = this.state;
        return (
        <>
        <Textarea content={ text } ref={el => this.refUl = el}/>
            {
            text.map(
                n => <li key={ n }>{ n }</li>
            )
            }
        
        </>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));