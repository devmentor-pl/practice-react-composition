import React from "react";
import { createRoot } from "react-dom/client";

import Category from "./Category";
import Cart from "./Cart";

import data from "./data.json";

class App extends React.Component {
  state = {
    cart: [],
  };

  addItem = (product) => {
    this.setState({
      cart: [...this.state.cart, product],
    });
  };

  removeItem = (id) => {
    const cartArray = this.state.cart.filter((item) => item.id !== id);
    this.setState({
      cart: cartArray,
    });
  };

  render() {
    console.log(this.state.cart);
    return (
      <section>
        <Category cart={this.state.cart} products={data} add={this.addItem} />
        <Cart selectedProducts={this.state.cart} remove={this.removeItem} />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);

