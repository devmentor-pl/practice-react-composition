import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    };

    addUser = username => {
        if (this.isStringValid(username)) {
            this.setState(state => {
                return {
                    usersList: [...state.usersList, username]
                };
            });
        } else {
            alert('User name must be at least 3 characters long!');
        };
    };

    render() {
        const { usersList } = this.state;
        return (
            <section>
                <Form onSubmit={this.addUser} />
                <List items={usersList} />
            </section>
        );
    };

    isStringValid(string) {
        return string.trim().length > 2;
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));