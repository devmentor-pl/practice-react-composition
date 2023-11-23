'use strict';
import React from 'react';

class Product extends React.Component {
  render() {
    const {
      id,
      name,
      price,
      isCart,
      isProductInCart,
      onAddToCart,
      onRemoveFromCart,
    } = this.props;

    return (
      <div>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        {isCart ? (
          <button
            onClick={() => onRemoveFromCart(id)}
            disabled={!isProductInCart}
          >
            Remove from Cart
          </button>
        ) : (
          <button onClick={() => onAddToCart(id)} disabled={isProductInCart}>
            Add to Cart
          </button>
        )}
      </div>
    );
  }
}

export default Product;
