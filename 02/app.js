import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }
    inputRef = React.createRef()

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            usersList: [...this.state.usersList, this.inputRef.current.value]
        })
        this.inputRef.current.value = ''
    }

    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form inputRef={this.inputRef} onSubmit={this.handleSubmit}/>
                <List items={ usersList } />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
