import React from "react";
import { v4 as uuid } from "uuid";

class File extends React.Component {
  convertSizeToMB = (size) => {
    return `${(size / 1024 / 1024).toFixed(2)} MB`;
  };

  readFileContent = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const { result: content } = e.target;
      const fileInfo = {
        id: uuid(),
        name: file.name,
        size: this.convertSizeToMB(file.size),
        content,
      };

      this.props.onAddFile(fileInfo);
    };

    reader.readAsText(file, "utf-8");
  };

  handleFileInput = (e) => {
    e.preventDefault();

    const { files } = e.target;

    Array.from(files).forEach((file) => {
      if (file.type.includes("text/plain")) {
        this.readFileContent(file);
      }
    });
  };

  render() {
    return (
      <input
        type="file"
        multiple
        ref={(node) => (this.input = node)}
        onChange={this.handleFileInput}
      />
    );
  }
}

export default File;
