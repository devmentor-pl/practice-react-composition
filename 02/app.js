import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    formRef = React.createRef();

    handleSubmit = e =>{
        e.preventDefault();
        
        const newUser = this.formRef.current.getUser();
        this.addUser(newUser); 
    }

    addUser(newUser){
        this.setState(state =>{
            return {usersList : [...state.usersList, newUser]}
        });
    }

    render() {
        const  { usersList } = this.state;
        console.log(usersList);
        return (
            <section>
                <Form onSubmit={ this.handleSubmit } ref={ this.formRef } />
                <List items={ usersList } />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));