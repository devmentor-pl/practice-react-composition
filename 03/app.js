import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';

import data from './data.json';

class App extends React.Component {
  state = {
    cart: [],
  };

  addToTheCart = (product) => {
    const cartCopy = [...this.state.cart];
    product.isCart = true;

    cartCopy.push(product);
    this.setState({ cart: cartCopy });
  };

  removeFromTheCart = (product) => {
    const cartCopy = [...this.state.cart];
    product.isCart = false;

    const productIndex = cartCopy.indexOf(product);
    cartCopy.splice(productIndex, 1);
    this.setState({ cart: cartCopy });
  };

  render() {
    const productsList = data.map((product) => {
      return (
        <Product
          item={product}
          key={uuid()}
          addToTheCart={() => this.addToTheCart(product)}
          isCategory={true}
        />
      );
    });

    const isCartList = this.state.cart.map((product) => {
      return (
        <Product
          item={product}
          key={uuid()}
          isCart={true}
          removeFromTheCart={() => this.removeFromTheCart(product)}
        />
      );
    });

    return (
      <section>
        <Category>{productsList}</Category>
        <Cart>{isCartList}</Cart>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
