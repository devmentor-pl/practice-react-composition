import React from "react";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
import TableFooter from "./components/TableFooter";

class Table extends React.Component {
  render() {
    return (
      <table>
        <TableHeader headerNames={this.getHeader()} />
        <TableBody bodyData={this.getBody()} />
        <TableFooter footerData={['Total price:', '', '', this.getTotalPrice()]}></TableFooter>
      </table>
    );
  }
  getHeader() {
    const { data } = this.props;
    const { id, ...names } = data[0];
    return [...Object.keys(names), "total price"];
  }
  getBody() {
    const { data } = this.props;
    const content = data.map((item) => {
      const { id, ...content } = item;
      const price = item.price * item.quantity;
      return [...Object.values(content), price];
    });
    return content;
  }
  getTotalPrice() {
    const { data } = this.props;
    return data.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

export default Table;
