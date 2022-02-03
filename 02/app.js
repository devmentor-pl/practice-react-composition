import React from "react";
import ReactDOM from "react-dom";

import List from "./List";
import Form from "./Form";

class App extends React.Component {
  state = {
    usersList: ["Rafał Kazik"],
  };

  // componentDidMount(e) {
  //   console.log(this.formRef.handleSubmit);
  // }

  addNameToState = (value) => {
    const listItem = value;
    this.setState((state) => {
      return {
        usersList: [...state.usersList, listItem],
      };
    });
  };

  render() {
    const { usersList } = this.state;

    return (
      <section>
        <Form passToParent={this.addNameToState} />
        <List items={this.state.usersList} />
      </section>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
