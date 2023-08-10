import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";

class Table extends React.Component {
  render() {
    const { data } = this.props;
    const headersArr = ["id", "name", "price", "quantity", "total"];
    const headersData = headersArr.map((title) => {
      return { title, id: crypto.randomUUID() };
    });
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
        {/* <TableFooter rows={headersData} summary={summary} /> */}
      </table>
    );
  }
}

export default Table;
