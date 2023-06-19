import React from "react";
import { createRoot } from "react-dom/client";

import Category from "./Category";
import Cart from "./Cart";

import data from "./data.json";

class App extends React.Component {
  state = {
    cart: [],
  };

  addItem = (item) => {
    this.setState({
        cart: [...this.state.cart, item]
    })
  };

  render() {
    console.log(this.state.cart);

    return (
      <section>
        <Category disabled={true} onClick={this.addItem} products={data} />
        <Cart />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
