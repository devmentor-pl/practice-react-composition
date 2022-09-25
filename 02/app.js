import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    input = React.createRef();

    addUser = (name) => {
        this.setState(state => {
            return{
        usersList: [...state.usersList, name]
            };
        });
    }


    render() {
        const  { usersList } = this.state;
        console.log(usersList);

        return (
            <section>
                <Form add={this.addUser} ref={this.input}/>
                <List items={ usersList } />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

