import React from "react";
import { createRoot } from "react-dom/client";
import { nanoid } from "nanoid";

import FilesList from "./components/FilesList";
import File from "./components/File";
import List from "./components/List";

class App extends React.Component {
  state = {
    filesList: [],
  };

  getFileObject = async (file) => {
    const id = nanoid(8);
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve({
          id,
          name: file.name,
          size: file.size,
          content: e.target.result,
        });
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  handleChange = async (e) => {
    const filesArray = Array.from(e.target.files);
    const filePromises = filesArray.map(this.getFileObject);
    const filesList = await Promise.all(filePromises);
    console.log("filesList", filesList);
    this.setState((prevState) => ({
      filesList: [...prevState.filesList, ...filesList],
    }));
  };

  render() {
    return (
      <section>
        <File onChange={this.handleChange} />
        <FilesList>
          <List files={this.state.filesList} />
        </FilesList>
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
