import React from "react";
import { createRoot } from "react-dom/client";

import List from "./List";
import Form from "./Form";

class App extends React.Component {
  state = {
    usersList: [],
  };

  handleClick = (input) => {
    console.log(input.value);
    this.setState({ usersList: [...this.state.usersList, input.value] });
    input.value = "";
  };

  render() {
    const { usersList } = this.state;

    return (
      <section>
        <Form handleClick={this.handleClick} />
        <List items={usersList} />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
