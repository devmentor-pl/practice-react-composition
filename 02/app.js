import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';
import Info from './Info';

class App extends React.Component {
    state = {
        usersList: [],
        msg: null,
    };

    addUser = username => {
        if (this.isStringValid(username)) {
            this.setState(state => {
                return {
                    usersList: [...state.usersList, username],
                    msg: null,
                };
            });
        } else {
            this.setState({ msg: 'Username must be at least 3 characters long!' });
        };
    };

    render() {
        const { usersList, msg } = this.state;
        return (
            <section>
                <Form onSubmit={this.addUser} />
                <Info msg={msg} />
                <List items={usersList} />
            </section>
        );
    };

    isStringValid(string) {
        return string.trim().length > 2;
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));