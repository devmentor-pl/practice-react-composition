import React, { Component } from "react";

class TableRow extends Component {
  render() {
    const { item, options } = this.props;

    const tdJSX = Object.keys(item).map((key) => {
      const id = crypto.randomUUID();

      if (options === "th") {
        return <th key={id}>{item[key]}</th>;
      }

      return <td key={id}>{item[key]}</td>;
    });

    return <tr>{tdJSX}</tr>;
  }
}

export default TableRow;
