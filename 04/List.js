import React from "react";

class List extends React.Component {
  render() {
    const { items } = this.props;
     console.log("----->",items);

    const list = items.map((item, index) => {
      console.log(item)
      return (
        <li key={index}>
          {" "}
          Name:{item.name} Size:{item.size} -bytes{" "}
          <img width="50%" height="50%" src={item.content}></img>
        </li>
      );
    });

  
    return <ul>{list}</ul>;
  }
}

export default List;
