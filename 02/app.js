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
           
        ],
        newUser: '',
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.firstElementChild.value)
        console.log(this.state.usersList)

        this.setState({
            usersList: [...this.state.usersList, {name: e.target.firstElementChild.value} ]
        })

        e.target.firstElementChild.value = '';
        
    }

    render() {
        const  { usersList } = this.state;
        console.log(usersList)

        return (
            <section>
                <Form handleEvent={this.handleSubmit} />
                <List items={ usersList } />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));