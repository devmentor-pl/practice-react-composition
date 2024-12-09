import React from "react";

function Cart({ children }) {
  return (
    <div>
      <h2>Cart</h2>
      <ul>{children}</ul>
    </div>
  );
}

export default Cart;
