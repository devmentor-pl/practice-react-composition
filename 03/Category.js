import React from "react";

function Category({ children }) {
  return (
    <div>
      <h2>Koszyk</h2>
      <table>
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Cena</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default Category;
