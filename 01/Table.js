import React from "react";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
import TableFooter from "./components/TableFooter";

import data from "./data.json";

class Table extends React.Component {
  render() {
    const headers = [{ name: "przedmiot", price: "cena", quantity: "liczba" }];
    return (
      <table>
        <TableHeader headers={headers} />
        <TableBody data={data} />
        <TableFooter data={data} />
      </table>
    );
  }
}

export default Table;
