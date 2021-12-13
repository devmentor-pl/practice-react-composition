import React from "react";

export default class Product extends React.Component {
  render() {
    const { product, isCategory, isCart } = this.props;

    return (
      <section>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <button onClick={this.addToCartHandler} disabled={!isCategory}>
          Add to cart
        </button>
        <button onClick={this.removeFromCartHandler} disabled={!isCart}>
          Remove from cart
        </button>
      </section>
    );
  }

  addToCartHandler = () => {
    const { addToCart, product } = this.props;

    addToCart(product);
  };

  removeFromCartHandler = () => {
    const { removeFromCart, product } = this.props;
    removeFromCart(product);
  };
}
