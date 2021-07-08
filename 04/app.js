import React from "react";
import ReactDOM from "react-dom";

import File from "./File";
import List from "./List";

class App extends React.Component {
  state = {
    filesList: [],
  };

  handleAddFile = (file) => {
    this.setState((state) => {
      return {
        filesList: [...state.filesList, file],
      };
    });
  };

  render() {
    return (
      <section>
        <File onAddFile={this.handleAddFile} />
        <List items={this.state.filesList} />
      </section>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
