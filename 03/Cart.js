import React from "react";
import Product from "./Product";

function Cart(props) {
  const { selectedProducts, remove } = props;
  console.log(selectedProducts);
  const list = selectedProducts.map((product, index) => {
    return (
      <Product
        onClick={() => remove(product.id)}
        key={index}
        name={product.name}
        price={product.price}
        button="Usuń"
      ></Product>
    );
  });

  return (
    <>
      <h2>Cart</h2>
      <ul>{list}</ul>
    </>
  );
}

export default Cart;
