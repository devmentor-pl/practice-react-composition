import React from "react";

const Product = (props) => {
  const handleAddToCart = () => props.addToCartClick(props.id);
  const handleRemoveFromCart = () => props.removeFromCartClick(props.id);

  return (
    <div>
      <span>product: {props.name} </span>
      <span> price: ${props.price} </span>
      {props.isCategory && (
        <button onClick={handleAddToCart} disabled={props.isCart}>
          Add to cart
        </button>
      )}
      {props.isCart && !props.isCategory && (
        <button onClick={handleRemoveFromCart}>Remove from cart</button>
      )}
    </div>
  );
};

export default Product;
