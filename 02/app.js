import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: ['aa', 'bb'],
        newUser: '',
    }

    addUser = e => {
        e.preventDefault()
        const { usersList } = this.state
        this.setState({
            usersList: [...usersList, this.input.value]
        })
    }

    render() {
        const { usersList } = this.state;

        return (
            <section>
                <Form 
                addUser={this.addUser}
                reference={ref => this.input = ref}
                />
                <List items={usersList} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
