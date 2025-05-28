import React from "react";

function Cart({ children }) {
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
// ten komponent jest taki sam jak Category, nie wiem czy tak to miało wyjść
export default Cart;
