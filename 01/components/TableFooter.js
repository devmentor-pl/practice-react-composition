import React, { Component } from "react";
import TableRow from "./TableRow";

class TableFooter extends Component {
  render() {
    const { rows, summary } = this.props;
    const tdJSX = rows.map((row) => {
      const id = crypto.randomUUID();
      if (row === "quantity") {
        return <td key={id}>{summary.quantity}</td>;
      }

      if (row === "total") {
        return <td key={id}>{summary.total}</td>;
      }

      return <td key={id}></td>;
    });
    return (
      <tfoot>
        <tr>{tdJSX}</tr>
      </tfoot>
    );
  }
}

export default TableFooter;
