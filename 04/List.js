import React from "react";

class List extends React.Component {
  render() {
    const list = this.props.listOfFiles;

    return (
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name} {item.size} {item.content}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
