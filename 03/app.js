'use strict';
import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

import './styles/main.css';

class App extends React.Component {
  state = {
    cart: [],
  };

  handleAddToCart = (productId) => {
    const productToAdd = data.find((product) => product.id === productId);
    this.setState((prevState) => ({
      cart: [...prevState.cart, productToAdd],
    }));
  };

  handleRemoveFromCart = (productId) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((product) => product.id !== productId),
    }));
  };

  render() {
    return (
      <section>
        <Category
          products={data}
          cart={this.state.cart}
          onAddToCart={this.handleAddToCart}
          onRemoveFromCart={this.handleRemoveFromCart}
        />
        <Cart
          cart={this.state.cart}
          onAddToCart={this.handleAddToCart}
          onRemoveFromCart={this.handleRemoveFromCart}
        />
      </section>
    );
  }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
