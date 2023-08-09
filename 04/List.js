import React from "react";

class List extends React.Component {
  render() {
    const { filesData } = this.props;
    console.log(filesData)
    const listJSX = filesData.map((item, index) => {
      const { name, size, content } = item;
      return (
        <li key={index}>
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
