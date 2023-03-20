import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
        draft: '',
    }

    updateList = e => {
        this.setState({ draft: e.target.value })
    }

    addUser = () => {
        const { usersList, draft } = this.state;
        this.setState(() => {
            return {
                usersList: [...usersList, draft],
                draft: '',
            }
        });
    }

    render() {
        const { usersList } = this.state;

        return (
            <section>
                <Form onChange={this.updateList} onClick={this.addUser} />
                <List items={usersList} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
