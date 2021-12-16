import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Form from './Form';
class App extends React.Component {
    state = {
        usersList: [],
    }

    submitHandler = e => {
        e.preventDefault();
        const user = e.target.name.value;

        this.addUser(user);
        this.setState({
            user: '',
        });
    }

    addUser = (user) => {
        this.setState(state => {
            return {
                usersList: [...state.usersList, user]
            };
        })
    }

    render() {
        const { usersList } = this.state;
        return (
            <section>
                <Form onClick={this.submitHandler} />
                <List items={usersList} />
            </section>
        )
    }
  
}
ReactDOM.render(<App />, document.querySelector('#root'));