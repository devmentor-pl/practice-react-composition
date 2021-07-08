import React from "react";
import ReactDOM from "react-dom";

import List from "./List";
import Form from "./Form";

class App extends React.Component {
  state = {
    usersList: [],
  };

  handleAddUser = (user) => {
    this.setState(({ usersList }) => {
      return {
        usersList: [...usersList, user],
      };
    });
  };

  render() {
    const { usersList } = this.state;

    return (
      <section>
        <Form onAddUser={this.handleAddUser} />
        <List items={usersList} />
      </section>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
