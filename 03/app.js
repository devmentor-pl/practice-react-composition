import React from "react";
import { createRoot } from "react-dom/client";

import Category from "./Category";
import Cart from "./Cart";
import { Product } from "./Product";
import data from "./data.json";

class App extends React.Component {
  state = {
    cart: [],
  };

  addProduct = (id) => {
    const product = data.find((item) => item.id === id);

    if (product) {
      this.setState({
        cart: [...this.state.cart, product],
      });
    }
  };

  isProduct = (id) => {
    return !!this.state.cart.find((item) => item.id === id);
  };

  removeProduct = (id) => {
    const updateCart = this.state.cart.filter((item) => item.id !== id);
    this.setState({
      cart: updateCart,
    });
  };

  render() {
    return (
      <section>
        <Category>
          {data.map((item) => (
            <Product
              key={item.id}
              isProduct={this.isProduct(item.id)}
              dataItem={item}
              addItem={this.addProduct}
            />
          ))}
        </Category>
        <Cart>
          {this.state.cart.map((item) => (
            <Product
              isCart={true}
              key={item.id}
              dataItem={item}
              removeItem={this.removeProduct}
            />
          ))}
        </Cart>
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
