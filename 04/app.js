import React from "react";
import ReactDOM from "react-dom";

import File from "./File";
import List from "./List";

class App extends React.Component {
  state = {
    filesList: [],
  };

  getFileTextContent = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target.result;
      console.log(fileContent);
      const fileDatas = [file.name, fileContent];

      this.setState((state) => {
        return {
          filesList: [...state.filesList, fileDatas],
        };
      });
    };

    reader.readAsText(file);
  };

  render() {
    return (
      <section>
        <File textContent={this.getFileTextContent} />
        <List items={this.state.filesList} />
      </section>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
