import React from "react";
import { createRoot } from "react-dom/client";
import { v4 as uuidv4 } from "uuid";

import File from "./File";
import List from "./List";

class App extends React.Component {
  state = {
    filesList: [],
  };

  handleChange = (e) => {
    const fileList = e.target.files;

    [...fileList].map((file) => {
      this.readFile(file).then((text) => {
        const newFile = {
          id: uuidv4(),
          size: file.size,
          name: file.name,
          text,
        };
        this.setState((prevState) => ({
          filesList: [...prevState.filesList, newFile],
        }));
      });
      return null; // Mapowanie wymaga zwrócenia wartości, ale nie będzie używane
    });
  };

  readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.readAsText(file);
    });
  };

  render() {
    return (
      <section>
        <File handleChange={this.handleChange} />
        <List list={this.state.filesList} />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
