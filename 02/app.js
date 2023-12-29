import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    updateState = (e) => {
        e.preventDefault()
        console.log(e.target.name)
        const user = e.target.firstElementChild.value
        this.setState(state => {
            return {
                usersList: [...state.usersList, user]
            }
        })
    }

    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form onSubmit={(e) => this.updateState(e)}/>
                <List items={ usersList } />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
