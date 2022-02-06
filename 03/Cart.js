import React from "react";
import { v4 as uuid } from "uuid";

function Cart(props) {
  const { cartItems } = props;

  console.log(cartItems);

  const categoryStyle = {
    display: "flex",
    flexDirection: "column",
    width: "20vw",
    border: "1px solid grey",
    margin: "10px",
    padding: "10px",
  };

  function removeFromCart(item) {
    // console.log(item);
    props.removeItemfromCart(item);
  }

  const categoryItems = props.cartItems.map((item) => {
    return (
      <section key={uuid()} style={categoryStyle}>
        <p>{item.name}</p>
        <p> cena: {item.price}</p>
        <button onClick={() => removeFromCart(item)}>Usuń z koszyka</button>
      </section>
    );
  });
  return (
    <>
      <h2>Cart</h2>
      {categoryItems}
    </>
  );
}

export default Cart;
