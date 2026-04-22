import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    addUser = (ev, el) => {
        ev.preventDefault();
        const newUser = el.value;
        console.log(newUser)

        this.setState((state) => {
            return {
                usersList: [...state.usersList, newUser]
            };
        });

        el.value = '';
    }

    render() {
        const { usersList } = this.state;

        return (
            <section>
                <Form func={this.addUser} />
                <List items={usersList} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
