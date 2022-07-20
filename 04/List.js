import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const listItems = this.props.items.map(item => {
      return <ListItem key={item.id} item={item} />;
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
