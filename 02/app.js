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
                <Form onClick={this.onClick} ref={ref => this.formRef = ref}/>
                <List items={ usersList } />
            </section>
        )
    }

    onClick = e => {
        e.preventDefault();
        const user = this.formRef.input.value;
        if(user) {
            this.setState({
                usersList: [...this.state.usersList, user],
            }, () => {
                // Dlaczego to działa?
                this.formRef.input.value = ''

                //A to nie?
                // user = '';
            });



        } else {
            alert('Wprowadź dane!')
        }
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));