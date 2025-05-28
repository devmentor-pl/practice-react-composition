import React from "react";
import { v4 as uuidv4 } from "uuid";

class File extends React.Component {
  fileInputRef = React.createRef();

  handleFileSelection = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileWithID = {
      id: uuidv4(),
      name: file.name,
      size: file.size,
      type: file.type,
    };
    this.props.onFileSelect(fileWithID);
  };

  render() {
    return (
      <input
        ref={this.fileInputRef}
        type="file"
        multiple
        onChange={this.handleFileSelection}
      />
    );
  }
}

export default File;
