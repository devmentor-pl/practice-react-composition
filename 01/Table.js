import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

class Table extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);

    const totalPrice = data.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return (
      <table>
        <TableHeader />
        <TableBody data={data} />
        <TableFooter totalPrice={totalPrice} />
      </table>
    );
  }
}

export default Table;
