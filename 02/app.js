import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    addUser = user => {
        this.setState(state => {
            return { usersList : [...state.usersList, user] }
        })
    }

    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form submitForm={ this.addUser }/>
                <List items={ usersList } />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));