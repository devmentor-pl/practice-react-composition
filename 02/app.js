import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    addUsers = newUser => {
        this.setState(({ usersList }) => ({ usersList: [...usersList, newUser] }))
        
    }

    render() {
        const  { usersList } = this.state;
  


        return (
            <section>
                <Form onSubmit={this.addUsers} />
                <List users = { usersList} />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));