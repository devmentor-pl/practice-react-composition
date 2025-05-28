import React from "react";
import { createRoot } from "react-dom/client";

import Category from "./Category";
import Cart from "./Cart";
import Product from "./Product";
import data from "./data.json";

class App extends React.Component {
  state = {
    cart: [],
  };

  addToCart = (product) => {
    const isInCart = this.state.cart.some((p) => p.id === product.id);
    !isInCart &&
      this.setState((prevState) => ({
        cart: [...prevState.cart, product],
      }));
  };

  removeFromCart = (productID) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((product) => product.id !== productID),
    }));
  };
  render() {
    const categoryList = data.map((item) => (
      <Product
        key={item.id}
        item={item}
        isCategory={true}
        isInCart={this.state.cart.some((p) => p.id === item.id)}
        addToCart={this.addToCart}
      />
    ));
    const cartList = this.state.cart.map((item) => (
      <Product
        key={item.id}
        item={item}
        isCart={true}
        removeFromCart={this.removeFromCart}
      />
    ));
    return (
      <section>
        <Category>{categoryList}</Category>
        <Cart>{cartList}</Cart>
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
