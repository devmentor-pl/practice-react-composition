import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    submitUser = user => {
        this.setState(()=> {
            const newUserList = [...this.state.usersList, user]
            return {userList: newUserList}
        })
    }

    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form onSubmit={this.submitUser}/>
                <List items={ usersList } />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
