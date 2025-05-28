import React from "react";
import { createRoot } from "react-dom/client";

import List from "./List";
import Form from "./Form";

class App extends React.Component {
  state = {
    usersList: [],
  };

  AddUser = (name) => {
    this.setState((prevState) => ({
      usersList: [...prevState.usersList, name],
    }));
  };
  render() {
    const { usersList } = this.state;

    return (
      <section>
        <Form onSend={this.AddUser} />
        <List items={usersList} />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
