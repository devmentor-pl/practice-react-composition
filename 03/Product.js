import React from 'react';

class Product extends React.Component {
  render() {
    const { id, name, price, isCart, handleClick, isProductInCart } =
      this.props;

    return (
      <div>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <button onClick={() => handleClick(id)} disabled={isProductInCart}>
          {isCart ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
    );
  }
}

export default Product;
