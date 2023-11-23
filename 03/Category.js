'use strict';
import React from 'react';
import Product from './Product';

class Category extends React.Component {
  render() {
    const { products, cart, onAddToCart, onRemoveFromCart } = this.props;

    const productList = products.map((product) => (
      <Product
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
        isProductInCart={cart.some((item) => item.id === product.id)}
      />
    ));

    return (
      <div>
        <h2>Category</h2>
        {productList}
      </div>
    );
  }
}

export default Category;
