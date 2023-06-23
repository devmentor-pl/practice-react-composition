import React from "react";
import TableRow from "./TableRow";

export default class TableBody extends React.Component {
  render() {
    const { tableItems } = this.props;

    const rows = tableItems.map((r) => {
      return <TableRow key={r.id} price={r.price} quantity={r.quantity} />;
    });
    return (
      <tbody>
        <tr>{rows}</tr>
      </tbody>
    );
  }
}
