import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";

class Table extends React.Component {
  render() {
    const { data } = this.props;
    const headersArr = Object.keys(data[0]).concat("total");
    const summary = data.reduce(
      (acc, curr) => {
        const quantity = acc.quantity + curr.quantity;
        const total = acc.total + curr.quantity * curr.price;
        return { quantity, total };
      },
      { quantity: 0, total: 0 }
    );

    return (
      <table>
        <TableHeader data={headersArr} />
        <TableBody data={data} />
        <TableFooter rows={headersArr} summary={summary} />
      </table>
    );
  }
}

export default Table;
