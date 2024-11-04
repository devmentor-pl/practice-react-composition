import React from "react";
import { createRoot } from "react-dom/client";

import Category from "./Category";
import Cart from "./Cart";

import data from "./data.json";

class App extends React.Component {
  state = {
    cart: [],
    products: data,
  };

  addToCart = (id) => {
    const [item] = [...this.state.products].filter((item) => item.id === id);
    const newProductsList = [...this.state.products].map((item) => {
      if (item.id === id) {
        return { ...item, isCart: true };
      }
      return item;
    });
    console.log(newProductsList);

    this.setState({
      cart: [...this.state.cart, item],
      products: newProductsList,
    });
  };
  removeFromCart = (id) => {
    const newCartList = [...this.state.cart].filter((item) => item.id !== id);
    const newProductsList = [...this.state.products].map((item) => {
      if (item.id === id) {
        return { ...item, isCart: false };
      }
      return item;
    });
    console.log(newProductsList);

    this.setState({
      cart: newCartList,
      products: newProductsList,
    });
  };

  render() {
    const { products, cart } = this.state;

    return (
      <section>
        <Category handleClick={this.addToCart} items={products} />
        <Cart handleClick={this.removeFromCart} items={cart} />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
