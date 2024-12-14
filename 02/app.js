import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: ['Marcin', 'Ola'],
    };
    addUser = (name) => {
        this.setState((prevState) => {
            return {
                usersList: [...prevState.usersList, name],
            };
        });
    };

    render() {
        const { usersList } = this.state;

        return (
            <section>
                <Form addUser={this.addUser} />
                <List items={usersList} />
            </section>
        );
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
