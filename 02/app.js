import React from "react";
import ReactDOM from "react-dom";

import List from "./List";
import Form from "./Form";

class App extends React.Component {
    state = {
        usersList: [],
    };

    addUser = (newUser) => {
        this.setState((state) => {
            return {
                usersList: [...this.state.usersList, newUser],
            };
        });
    };

    render() {
        const { usersList } = this.state;

        return (
            <section>
                <Form addUser={this.addUser} />
                <List items={this.state.usersList} />
            </section>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
