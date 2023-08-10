import React, { Component } from "react";

class TableRow extends Component {
  render() {
    const { item, options } = this.props;

    const tdJSX = Object.keys(item).map((key, index) => {
      if (options === "th") {
        return <th key={index}>{item[key]}</th>;
      }

      return <td key={index}>{item[key]}</td>;
    });

    return <tr>{tdJSX}</tr>;
  }
}

export default TableRow;
