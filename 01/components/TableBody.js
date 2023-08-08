import React, { Component } from "react";
import TableRow from "./TableRow";

class TableBody extends Component {
  render() {
    const { data } = this.props;
    const tableRowsJSX = data.map((item) => {
      const itemWithTotalKey = { ...item, total: item.quantity * item.price };
      return <TableRow key={item.id} item={itemWithTotalKey} />;
    });

    return <tbody>{tableRowsJSX}</tbody>;
  }
}

export default TableBody;
