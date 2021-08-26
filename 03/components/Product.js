import React from 'react';

import ProductWrapper from './styles/ProductWrapper';
import ProductName from './styles/ProductName';
import numberSeparator from './styles/NumberSeparator';

function Product({product, isCategory, onAddToCart, onRemoveFromCart}) {
  const {price, name, isAddedToCart = false} = product;
  
  return (
    <div style={ProductWrapper}>
      <h4 style={ProductName}>{name}</h4>
      <p>Price: <strong>{numberSeparator(price)}</strong></p>
      <p>
        {isCategory ? (
          <button disabled={isAddedToCart} onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        ) : (
          <button onClick={() => onRemoveFromCart(product)}>
            Remove from Cart
          </button>
        )}
      </p>
    </div>
  );
}

export default Product;