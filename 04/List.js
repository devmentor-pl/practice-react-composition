import React from "react";

class List extends React.Component {
  render() {
    const { filesList } = this.props;
    const files = filesList.map((file) => {
      const { name, size, content, id } = file;
      return (
        <li key={id}>
          <p>Name: {name}</p>
          <p>Size: {size}B</p>
          <p>Content: {content}</p>
        </li>
      );
    });

    return <ul>{files}</ul>;
  }
}

export default List;
