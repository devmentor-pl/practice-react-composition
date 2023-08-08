import React from "react";
import { createRoot } from "react-dom/client";

import Table  from "./components/Table.js";
import data from "./data.json";

function App() {
  return <Table data={data}></Table>;
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
