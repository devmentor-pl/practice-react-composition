import React from "react";
import { createRoot } from "react-dom/client";

import File from "./File";
import List from "./List";

class App extends React.Component {
  state = {
    filesList: [],
  };

  addFile = (file) => {
    this.setState((state) => {
      const newList = [...state.filesList, file];
      return {
        filesList: newList,
      };
    });
  };

  render() {
    return (
      <section>
        <File loadFile={this.addFile} />
        <List filesData={this.state.filesList} />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
