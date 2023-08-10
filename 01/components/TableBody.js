import React, { Component } from "react";
import TableRow from "./TableRow";

class TableBody extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    const tableRowsJSX = data.map((item) => {
      console.log(item);
      const itemWithTotalKey = { ...item, total: item.quantity * item.price };
      return <TableRow key={item.id} item={itemWithTotalKey} />;
    });

    return <tbody>{tableRowsJSX}</tbody>;
  }
}

export default TableBody;
