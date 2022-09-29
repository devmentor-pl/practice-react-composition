import React from "react";
import ReactDOM from "react-dom";
import { v4 as uuid } from "uuid";
import File from "./File";
import List from "./List";

class App extends React.Component {
  state = {
    filesList: [],
  };

  render() {
    const {filesList} = this.state
    return (
      <section>
        <File onChange={this.showFile} />
        <List data={filesList} />
      </section>
    );
  }
  showFile = async (e) => {
    const { filesList } = this.state;
    const file = e.target.files[0];
    if (file && file.type.includes("text")) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const content = e.target.result;
        const newFile = {
          name: file.name,
          size: this.formatFileSize(file.size),
          content: content,
          id: uuid()
        };
        this.setState({
          filesList: [...filesList, newFile],
        });
      };
      reader.readAsText(e.target.files[0]);
    } else {
      alert("Wybierz plik tekstowy!");
    }
  };
  formatFileSize = (bytes) =>{
    const sufixes = ['B', 'kB', 'MB']
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
