import React from "react";

class File extends React.Component {
  handleChange = () => {
    const { loadFile } = this.props;
    const { files } = this.inputFiles;

    Object.values(files).forEach((file) => {
      const isFileValid = file && file.type.includes("text");
      if (!isFileValid) throw new Error("file invalid");

      const { name, size } = file;
      const normalizeName = name.split(".")[0];

      const reader = new FileReader();
      reader.onload = function (readerEvent) {
        const content = readerEvent.target.result;
        const objData = {
          id: crypto.randomUUID(),
          content,
          name: normalizeName,
          size,
        };
        loadFile(objData);
      };

      reader.readAsText(file, "UTF-8");
    });
  };

  render() {
    return (
      <input
        onChange={this.handleChange}
        type="file"
        ref={(ref) => (this.inputFiles = ref)}
        multiple
      />
    );
  }
}

export default File;
