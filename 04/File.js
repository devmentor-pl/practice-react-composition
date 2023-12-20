import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class File extends React.Component {
  handleFileChange = (e) => {
    const fileReader = new FileReader();
    const files = e.target.files[0];

    fileReader.onload = (e) => {
      const text = e.target.result;

      this.props.onFileUpload({
        id: uuidv4(),
        name: files.name,
        size: files.size,
        content: text,
      });
    };

    fileReader.readAsText(files);
  };

  render() {
    return (
      <input
        type="file"
        accept=".txt"
        multiple
        onChange={this.handleFileChange}
      />
    );
  }
}

export default File;
