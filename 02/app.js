import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: ['Ola', 'Ala', 'Ela'],
    }
    addElement = (element) => {
        this.setState({
            usersList: [...this.state.usersList, element]
        })
    }
    render() {
        const { usersList } = this.state;
        return (
            <section>
                <Form addUser={this.addElement} />
                <List items={usersList} />
            </section>
        )
    }
   
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
