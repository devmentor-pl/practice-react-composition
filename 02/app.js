import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    addUser = (name) => {
        this.setState(() => {
            const newList = [...this.state.usersList, name]
            return { usersList: newList}
        })
    }

    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form onSubmit={this.addUser}/>
                <List items={ usersList } />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));