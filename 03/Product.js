import React from "react";

function Product({ product, isCategory, addToCart, removeFromCart }) {
  const { price, name, isAddedToCart = false } = product;

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>
        {isCategory ? (
          <button disabled={isAddedToCart} onClick={() => addToCart(product)}>
            Dodaj do listy
          </button>
        ) : (
          <button onClick={() => removeFromCart(product)}>
            Usuń z listy
          </button>
        )}
      </p>
    </div>
  );
}

export default Product;