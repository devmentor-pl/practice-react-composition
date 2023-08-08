import React from "react";
import { createRoot } from "react-dom/client";

import List from "./List";
import Form from "./Form";

class App extends React.Component {
  state = {
    usersList: [],
  };

  addUser = (name) => {
    this.setState({ usersList: this.state.usersList.concat(name) }, () => {
      console.log(this.state);
    });
  };

  render() {
    const { usersList } = this.state;

    return (
      <section>
        <Form updateState={this.addUser} />
        <List items={usersList} />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
