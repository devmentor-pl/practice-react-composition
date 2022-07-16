import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: ['aaaaa','bbbbbb','ccccc'],
    }

    addUser= (newUser) => {
        if(newUser) {
            const newUsersList = [...this.state.usersList, newUser];
            this.setState({
                usersList: newUsersList
            });
        }
    }

    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form addUser= {this.addUser}/>
                <List items={ usersList } />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));