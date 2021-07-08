import React from "react";

function Product({ product, isCategory, onAddToCart, onRemoveFromCart }) {
  const { price, name, isAddedToCart = false } = product;

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>
        {isCategory ? (
          <button disabled={isAddedToCart} onClick={() => onAddToCart(product)}>
            Add to cart
          </button>
        ) : (
          <button onClick={() => onRemoveFromCart(product)}>
            Remove from cart
          </button>
        )}
      </p>
    </div>
  );
}

export default Product;
