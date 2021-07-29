import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [
            {
                name:'Anna Wanna',
            },
           
        ]
    }

    addNewUser = (newUser) => {
        this.setState({
            usersList: [...this.state.usersList, {name: newUser} ]
        })
    }

    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form addNewUser={this.addNewUser} />
                <List items={ usersList } />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));