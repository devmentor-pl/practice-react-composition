import React from "react";
import { createRoot } from "react-dom/client";

import Category from "./Category";
import Cart from "./Cart";
import Product from "./Products";

import data from "./data.json";

class App extends React.Component {
  state = {
    cart: [],
  };

  renderProducts(data) {
    const productsJSX = data.map((item) => {
      const { cart } = this.state;
      const isInCart = cart.find((cartItem) => cartItem.id === item.id);
      return (
        <Product
          key={item.id}
          item={item}
          isCart={true}
          handleClick={this.addToCart}
          buttonDisabled={isInCart}
        />
      );
    });

    return productsJSX;
  }

  renderCartItems() {
    const { cart } = this.state;
    const cartItems = cart.map((item) => {
      return (
        <Product key={item.id} item={item} handleClick={this.removeFromCart} />
      );
    });

    return cartItems;
  }

  addToCart = (id) => {
    const product = data.find((item) => item.id === id);
    this.setState({ cart: [...this.state.cart, product] });
  };

  removeFromCart = (id) => {
    this.setState((state) => {
      const newCart = state.cart.filter((cartItem) => cartItem.id !== id);
      return {
        cart: newCart,
      };
    });
  };

  render() {
    return (
      <section>
        <Category>{this.renderProducts(data)}</Category>
        <Cart>{this.renderCartItems()}</Cart>
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
