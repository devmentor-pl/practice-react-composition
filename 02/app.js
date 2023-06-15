import React from "react";
import { createRoot } from "react-dom/client";

import List from "./List";
import Form from "./Form";

class App extends React.Component {
  state = {
    usersList: [],
  };

  addUser = (user) => {
    this.setState((state) => {
      return { usersList: [...state.usersList, user] };
    });
  };



  render() {
    const { usersList } = this.state;
    console.log(usersList);

    return (
      <section>
        <Form  addNewUser={this.addUser}/>
        <List users={this.state.usersList} />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
