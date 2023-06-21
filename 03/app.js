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

  checkCart = (productId) => {
  console.log(this.state.cart, productId)
    return this.state.cart.find((item)=>{
      return item.id === productId
    })



  }

  render() {
    console.log(this.state.cart);

    return (
      <section>
        <Category checkCart={this.checkCart} onClick={this.addItem} products={data} />
        <Cart />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
