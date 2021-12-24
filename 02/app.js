import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    render() {
        const  { usersList } = this.state;
        return (
            <section>
                <Form formHandle={this.getUserData}/>
                <List items={ usersList } />
            </section>
        )
    }

    getUserData = value => {
        const {usersList} = this.state;
        this.setState({
            usersList: [...usersList, value]
        })
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));