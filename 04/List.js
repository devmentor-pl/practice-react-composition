import React from "react";
import { v4 as uuid } from "uuid";

class List extends React.Component {
  render() {
    return <ul>{this.renderList()}</ul>;
  }
  renderList() {
    const { data } = this.props;

    return data.map((file) => {
      return (
        <li key={uuid()}>
          <p>Name:{file.name}</p>
          <p>Size:{file.size}</p>
          <p>Content:{file.content}</p>
        </li>
      );
    });
  }
}

export default List;
