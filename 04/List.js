import React from "react";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map((file) => {
          console.log(file.text);
          return (
            <li key={file.id}>
              <h3>Name: {file.name}</h3>
              <h3>Size: {file.size}</h3>
              <h4>Text:</h4>
              <p>{file.text}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
