import React from "react";

class List extends React.Component {
  render() {
    const { filesData } = this.props;
    console.log(filesData)
    const listJSX = filesData.map((item) => {
      const { name, size, content, id } = item;
      return (
        <li key={id}>
          <h4>file name: {name}</h4>
          <p>size: {size}</p>
          <p>content: {content}</p>
        </li>
      );
    });
    return <ul>{listJSX}</ul>;
  }
}

export default List;
