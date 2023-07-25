import React from "react";
import { createRoot } from "react-dom/client";

import File from "./File";
import List from "./List";

class App extends React.Component {
  state = {
    filesList: [],
  };

  addFileToState = (fileData) => {
    this.setState((state) => {
      return {
        filesList: [...state.filesList, fileData],
      };
    });
  };

  render() {
    return (
      <section>
        <File addFileToState={this.addFileToState} />
        <List data={this.state.filesList} />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
