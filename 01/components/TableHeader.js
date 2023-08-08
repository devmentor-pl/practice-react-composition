import React, { Component } from "react";
import TableRow from "./TableRow";

class TableHeader extends Component {
  render() {
    const { data } = this.props;
    return (
      <thead>
        <TableRow item={data} options={"th"} />
      </thead>
    );
  }
}

export default TableHeader;
