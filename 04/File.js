import React from "react";

class File extends React.Component {
  handleChange = (e) => {
    [...this.input.files].forEach((file, index) => {
      if (file.type.includes("text")) {
        const reader = new FileReader();
        reader.addEventListener(
          "load",
          () => {
            const data = {
              name: file.name,
              size: file.size,
              content: reader.result,
              id: index,
            };
            this.props.addItem(data);
          },
          false
        );
        reader.readAsText(file);
      }
    });
  };
  render() {
    return (
      <input
        ref={(item) => (this.input = item)}
        type="file"
        onChange={this.handleChange}
        multiple
      />
    );
  }
}

export default File;
