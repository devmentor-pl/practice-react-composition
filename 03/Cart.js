import React from 'react';
import Product from './Product';

class Cart extends React.Component {
  render() {
    const { cart, onRemoveFromCart } = this.props;

    const cartList = cart.map((product) => (
      <Product
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        handleClick={onRemoveFromCart}
        isCart
      />
    ));

    return (
      <div>
        <h2>Cart</h2>
        {cartList}
      </div>
    );
  }
}

export default Cart;
