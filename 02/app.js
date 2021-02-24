import React from 'react';
import ReactDOM from 'react-dom';
import {v4 as uuid} from 'uuid';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    firstInput = React.createRef();

    updateText = () => {
        console.log(this.firstInput.current.value)

        const obj = {
            name: this.firstInput.current.value,
            id: uuid()
        }
        this.setState({
            usersList: [...this.state.usersList, obj]
            
        })
        console.log(this.state)

    }
    render() {
        
        const  { usersList } = this.state;

        console.log(usersList)

        return (
            <section>
                <Form firstInput={this.firstInput} onClick={this.updateText}/>
                <List usersList={ usersList } />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));