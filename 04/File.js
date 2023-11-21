import React from "react";
import { v4 as uuid } from "uuid";

class File extends React.Component {
    state = {
        filesArray: [],
        fileObj: {},
    }
    handleChangeFile = (file) => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
          const text = e.target.result;

          const fileObj = {
            id: uuid(),
            name: file.name,
            size: file.size,
            content: text,
        }
        this.setState((prevState) => ({
            filesArray: [...prevState.filesArray, { ...fileObj }],
          }));
          this.props.addFileObject({ ...fileObj })
        };
     
        fileReader.readAsText(file);
      }
  render() {
    return (
        <input type="file" multiple accept=".txt, .md" onChange={(e) => this.handleChangeFile(e.target.files[0])}
        />
    )
  }
}

export default File;
