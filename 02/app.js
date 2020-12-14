import React from 'react';
import ReactDOM from 'react-dom';

import List from './components/List';
import Form from './components/Form';

class App extends React.Component {
    state = {
        usersList: ['Martin', 'Kamil'],
    }

    handleStateUpdate = newUser => {
        this.setState({
            usersList: [...this.state.usersList, newUser]
        })
    }
    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form updateState={ this.handleStateUpdate }/>
                <List users={ usersList } />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));