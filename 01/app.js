import React from "react";
import { createRoot } from "react-dom/client";

import data from "./data.json";
import { Table } from "./Table";
import { TableHeader, TableBody, TableRow, TableFooter } from "./components";

const headers = ["ID", "Nazwa", "Cena", "Ilość", "Do zapłaty"];
const total = data.reduce((acc, item) => acc + item.price * item.quantity, 0);

const cellStyle = {
  border: "1px solid black",
  padding: "6px",
  textAlign: "left",
};

function App() {
  return (
    <Table>
      <TableHeader headers={headers} style={cellStyle} />
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id} item={item} style={cellStyle} />
        ))}
      </TableBody>
      <TableFooter style={cellStyle} total={total} />
    </Table>
  );
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
