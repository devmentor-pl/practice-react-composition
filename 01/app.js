import React from "react";
import { createRoot } from "react-dom/client";

import data from "./data.json";
import Table from "./Table";

function App() {
  return <Table data={data} />;
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
