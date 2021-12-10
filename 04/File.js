import React from "react";
import { v4 as uuidv4 } from "uuid";

class File extends React.Component {
  render() {
    return (
      <input accept=".txt" type="file" multiple onChange={this.handleChange} />
    );
  }

  handleChange = (e) => {
    const objList = [];
    const files = e.target.files;

    Object.keys(files).forEach((f) => {
      const file = files[f];

      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = () => {
        const obj = {
          name: file.name,
          content: reader.result,
          size: file.size,
          id: uuidv4(),
        };
        objList.push(obj);
      };
    });

    this.sendTasks(objList);
  };

  sendTasks = (objList) => {
    const { loadFilesToState } = this.props;

    loadFilesToState(objList);
  };
}

export default File;
