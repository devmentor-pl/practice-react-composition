import React from "react";
import ReactDOM from "react-dom";

import List from "./List";
import Form from "./Form";

class App extends React.Component {
  state = {
    usersList: [],
    value: "",
  };

  render() {
    const { usersList } = this.state;
    return (
      <section>
        <Form onChange={this.inputChange} onClick={this.addUser} />
        <List users={usersList} />
      </section>
    );
  }
  inputChange = (e) => {
    const value = e.target.value;
    this.setState({
      value: value,
    });
  };
  addUser = () => {
    const { usersList, value } = this.state;
    this.setState({
      usersList: [...usersList, value],
    });
  };
}

ReactDOM.render(<App />, document.querySelector("#root"));
