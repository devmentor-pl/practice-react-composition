import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

class Table extends React.Component {
  render() {
    const { data } = this.props;

    const headers = ["Name", "Price", "Quantity", "Total Price"];

    const totalPrice = data.reduce((price, item) => {
      return price + item.price * item.quantity;
    }, 0);

    return (
      <table>
        <TableHeader headers={headers} />
        <TableBody data={data} />
        <TableFooter totalPrice={totalPrice} />
      </table>
    );
  }
}

export default Table;
