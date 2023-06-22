import React from "react";

class File extends React.Component {
  inputRef = React.createRef();

  showData = () => {
    // console.log(this.inputRef.current.files);


    const filesArray = Array.from(this.inputRef.current.files);

    console.log(filesArray)

    filesArray.forEach((file) => {
      const reader = new FileReader();

      if (file.type.includes("image")) {
        reader.onload = (e) => {
          const content = e.target.result;
          this.props.add({
            name: file.name,
            size: file.size,
            content: content,
          });
        };

        reader.readAsDataURL(file);
      } else {
        alert("to nie jest zdjęcie!");
      }
    });
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
