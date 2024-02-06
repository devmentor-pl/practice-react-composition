import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        userList: [],
    }

    addUser = (userData) => {
        this.setState(state =>({
            userList :[...state.userList, userData]
        }))
    }

    render() {
        const  { userList } = this.state;

        return (
            <section>
                <Form onSubmit = {this.addUser} />
                <List items={ userList} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
