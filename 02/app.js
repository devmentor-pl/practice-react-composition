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
                <Form onSubmit={this.getUser}/>
                <List items={ usersList } />
            </section>
        )
    }

    getUser = user => {
        this.setState(state => {
            return {
              usersList: [...state.usersList, user]
             }
       }) 
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));