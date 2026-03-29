import React from "react";

class List extends React.Component {
  render() {
    const { files } = this.props;
    return (
      <ul>
        {files &&
          files.map((file) => (
            <li key={file.id}>
              <div>
                <strong>{file.name}</strong>
                <span>({file.size} B)</span>
              </div>
              <p style={{ maxWidth: "70%" }}>{file.content}</p>
            </li>
          ))}
      </ul>
    );
  }
}

export default List;
