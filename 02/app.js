import React from "react";
import { createRoot } from "react-dom/client";

import List from "./List";
import Form from "./Form";

class App extends React.Component {
  formRef = React.createRef();
  state = {
    usersList: [],
  };

  addUser = (user) => {
    this.setState((state) => {
      return { usersList: [...state.usersList, user] };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addUser(this.formRef.current.getValue());
    this.formRef.current.value = "";
  };

  render() {
    const { usersList } = this.state;
    console.log(usersList);

    return (
      <section>
        <Form ref={this.formRef} add={this.handleSubmit} />
        <List users={this.state.usersList} />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
