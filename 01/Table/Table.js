import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

class Table extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <table style={{ border: "1px solid blue" }}>
        <TableHeader headerItems={data} />
        <TableBody tableItems={data} />
        <TableFooter totalPrice={data} />
      </table>
    );
  }
}

export default Table;
