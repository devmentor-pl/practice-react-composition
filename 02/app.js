import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    updateList = newUser => {
        this.setState(({ usersList }) => ({ usersList: [...usersList, newUser] }))
    }

    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form onListUpdate={this.updateList} />
                <List items={ usersList } />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));