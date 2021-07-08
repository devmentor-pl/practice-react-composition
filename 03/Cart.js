import React from "react";

function Cart({ children }) {
  return (
    <>
      <h2>Cart</h2>
      <div className={"cart-list"}>{children}</div>
    </>
  );
}

export default Cart;
