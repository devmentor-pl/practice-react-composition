import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: ['Jacek', 'Malwina']
    }


    addPerson=(name) => {
        this.setState({
            usersList: [...this.state.usersList, name]
        })
    }

    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form addUser={this.addPerson} />
                <List items={ usersList } />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
