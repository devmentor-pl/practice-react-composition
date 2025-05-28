import React from "react";
import { createRoot } from "react-dom/client";

import File from "./File";
import List from "./List";

class App extends React.Component {
  state = {
    filesList: [],
  };

  GetInfo = (info) => {
    this.setState((prevState) => ({
      filesList: [...prevState.filesList, info],
    }));
  };
  render() {
    return (
      <section>
        <File onFileSelect={this.GetInfo} />
        <List items={this.state.filesList} />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
