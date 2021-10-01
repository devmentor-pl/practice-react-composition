import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usersList: []
        }
        this.renderList = this.renderList.bind(this);
    }

    renderList (e) {
        e.preventDefault();
        const [ value ] = e.target.children;
        const { usersList } = this.state;

        this.setState({
            usersList: [...usersList, value.value],
        });
    }

    render () {
        const { usersList } = this.state;
        return (
            <section>
                <Form onClick={ this.renderList }/>
                <List items={ usersList }/>
            </section>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)