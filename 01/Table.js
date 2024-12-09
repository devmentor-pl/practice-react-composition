import React from "react";
import { TableHeader } from "./components/TableHeader";
import { TableBody } from "./components/TableBody";
import { TableRow } from "./components/TableRow";
import { TableFooter } from "./components/TableFooter";

class Table extends React.Component {
  publishRows() {
    const { data } = this.props;
    return data.map((item) => {
      const { id, name, price, quantity } = item;
      return (
        <TableRow
          key={id}
          items={[id, name, price, quantity, quantity * price]}
        />
      );
    });
  }

  totalPrice() {
    const { data } = this.props;
    return data.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <table>
        <TableHeader names={["Id", "Names", "Price", "Quantity", "Together"]} />
        <TableBody>{this.publishRows()}</TableBody>
        <TableFooter items={["", "", "", "", this.totalPrice()]} />
      </table>
    );
  }
}

export default Table;
