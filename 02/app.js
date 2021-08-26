import React from 'react';
import ReactDOM from 'react-dom';

import List from './components/List';
import Form from './components/Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    submit = (event) => {
        event.preventDefault();
        const [name] = event.target.elements;
        this.addUser(name.value);
        name.value = '';
    }

    addUser(user) {
        this.setState({
            usersList: [...this.state.usersList, user]
        });
    }

    render() {
        const {usersList} = this.state;
        return (
            <section>
                <Form formEl={this.submit}/>
                <List items={usersList}/>
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));