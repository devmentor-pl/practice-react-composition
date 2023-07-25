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

  renderCategory = (data) => {
    const list = data.map((productData, index) => {
      const isInCart = this.state.cart.some(
        (item) => item.name === productData.name
      );
      return (
        <Product
          key={index}
          data={productData}
          isInCart={isInCart}
          onClick={this.addToBasket}
        />
      );
    });
    return list;
  };

  renderCart = () => {
    const list = this.state.cart.map((productData, index) => {
      return (
        <Product
          key={index}
          btnText={"usun"}
          data={productData}
          onClick={this.removeFromBasket}
        />
      );
    });
    return list;
  };

  addToBasket = (data) => {
    this.setState((state) => {
      return {
        cart: [...state.cart, data],
      };
    });
  };

  removeFromBasket = (data) => {
    const filteredState = this.state.cart.filter((item) => {
      return item.id !== data.id;
    });
    this.setState({ cart: filteredState });
  };

  render() {
    return (
      <section>
        <Category>{this.renderCategory(data)}</Category>
        <Cart>{this.renderCart()}</Cart>
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
