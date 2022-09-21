import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
        inputValue: ''
    }

    onChange = (e) => {
        const inputValue = e.target.value
        this.setState({
            inputValue: inputValue
        })
    }

    onClick = (e) => {
        console.log(e)

        if (this.state.inputValue !== '') {
            this.setState(
                {
                    usersList: [...this.state.usersList, this.state.inputValue]
                }
            )
            console.log(this.state.usersList)
        }
        else(
            alert('Wpisz dane!')
        )
       


    }

    render() {
        const { usersList } = this.state;

        return (
            <section>
                <Form onChange={this.onChange} onClick={this.onClick} />
                <List items={usersList} />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));