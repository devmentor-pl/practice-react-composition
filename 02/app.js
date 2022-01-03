import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    addUser = (user) => {
        this.setState( state => {
            return {
                usersList: [...state.usersList, user]
            }
        })
    }

    render() {
        return (
            <section>
                <Form onSubmit={ this.addUser }/>
                <List items={ this.state.usersList } />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));