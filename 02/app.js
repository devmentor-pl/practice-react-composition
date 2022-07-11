import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    addUser = (user) => {
        // console.log('addUser')
        // console.log( user )
        this.setState({ usersList: [...this.state.usersList, user] });
    }

    render() {
        const  { usersList } = this.state;

        window.addUser = this.addUser

        return (
            <section>
                <Form addUser={this.addUser} />
                <List items={ usersList } />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));