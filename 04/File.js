import React from "react";

class File extends React.Component {
  inputRef = React.createRef();

  showData = (e) => {
    console.log("działa");

    const files = Array.from(this.inputRef.current.files).map(
      (file) => file.name
    );
    this.props.add(files);
  };

  render() {
    return (
      <input
        ref={this.inputRef}
        onChange={this.showData}
        type="file"
        multiple
      />
    );
  }
}

export default File;
