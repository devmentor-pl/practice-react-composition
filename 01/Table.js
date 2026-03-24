import React from "react";

import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
import TableFooter from "./components/TableFooter";

const wrapperStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "40px",
};
const tableStyle = {
  borderCollapse: "collapse",
  width: "auto",
  minWidth: "400px",
};
const cellStyle = {
  border: "1px solid black",
  padding: "6px",
  textAlign: "left",
};

class Table extends React.Component {
  render() {
    const { data } = this.props;
    const tableHeaders = ["ID", "Nazwa", "Cena", "Ilość", "Do zapłaty"];
    const total = data.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );

    return (
      <div style={wrapperStyle}>
        <table style={tableStyle}>
          <TableHeader style={cellStyle} headers={tableHeaders} />
          <TableBody style={cellStyle} data={data} />
          <TableFooter style={cellStyle} total={total} />
        </table>
      </div>
    );
  }
}

export default Table;
