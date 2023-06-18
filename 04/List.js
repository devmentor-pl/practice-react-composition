import React from "react";

class List extends React.Component {
  render() {
    const { items } = this.props;

    const list = items.map((item) => {
      return <li>{item}</li>;
    });
    console.log(items);

    return <ul>{list}</ul>;
  }
}

export default List;
