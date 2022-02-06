import React from "react";

class File extends React.Component {
  addFile = (e) => {
    const file = e.target.files[0];
    this.props.textContent(file);
  };

  render() {
    return (
      <input
        type="file"
        onChange={(e) => this.addFile(e)}
        ref={(node) => (this.input = node)}
        multiple
      />
    );
  }
}

export default File;
