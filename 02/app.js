import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    updateList = user => {
        this.setState(prevState => {
            return {
                usersList: [...prevState.usersList, user]
            }
        })
    }

    render() {
        const  { usersList } = this.state;

        return (
            <section>
                <Form updateList={this.updateList}/>
                <List items={ usersList } />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));