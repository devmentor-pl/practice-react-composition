import React from "react";

class List extends React.Component {
  render() {
    const listItems = this.props.items.map((item) => {
      return (
        <li key={item.id}>
          <h2>File name: {item.name}</h2>
          <p>File size: {item.size}</p>
          <h3>File content:</h3>
          <p>{item.content}</p>
        </li>
      );
    });

    return (
      <>
        <h1>Lista plików</h1>
        <ul>{listItems}</ul>
      </>
    );
  }
}

export default List;
