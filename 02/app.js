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
                <Form onSubmit={(e) => this.updateState(e)}/>
                <List items={ usersList } />
            </section>
        )
    }
    
    updateState = (e) => {
        e.preventDefault()
        const user = e.target.firstElementChild.value
        this.setState(state => {
            return {
                usersList: [...state.usersList, user]
            }
        })
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));