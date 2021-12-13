import React from "react";
import ReactDOM from "react-dom";

import File from "./File";
import List from "./List";

class App extends React.Component {
  state = {
    filesList: [],
  };

  render() {
    return (
      <section>
        <File loadFilesToState={this.loadFilesToState} />
        <List filesList={this.state.filesList} />
      </section>
    );
  }

  loadFilesToState = (filesList) => {
    this.setState({
      filesList: this.state.filesList.concat(filesList),
    });
  };
}

ReactDOM.render(<App />, document.querySelector("#root"));
