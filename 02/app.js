import React from "react";
import ReactDOM from "react-dom";

import List from "./List";
import Form from "./Form";

class App extends React.Component {
  state = {
    usersList: [],
  };

  render() {
    const { usersList } = this.state;

    return (
      <section>
        <Form onUpdate={this.handleUpdate} />
        <List items={usersList} />
      </section>
    );
  }

  handleUpdate = (user) => {
    this.setState({
      usersList: [...this.state.usersList, user],
    });
  };
}

ReactDOM.render(<App />, document.querySelector("#root"));
