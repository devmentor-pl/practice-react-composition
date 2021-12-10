import React from "react";
import ReactDOM from "react-dom";

import Category from "./Category";
import Cart from "./Cart";
import Product from "./Product";

import data from "./data.json";

class App extends React.Component {
  state = {
    cart: [],
  };

  render() {
    const categoryProducts = data.map((product) => {
      return (
        <Product
          addToCart={this.addToCart}
          key={product.id}
          isCategory={true}
          product={product}
        />
      );
    });

    const cartProducts = this.state.cart.map((product) => {
      return (
        <Product
          removeFromCart={this.removeFromCart}
          key={product.id * -1}
          isCart={true}
          product={product}
        />
      );
    });

    return (
      <section>
        <Category>{categoryProducts}</Category>
        <Cart>{cartProducts}</Cart>
      </section>
    );
  }

  addToCart = (product) => {
    this.setState({
      cart: [...this.state.cart, product],
    });
  };

  removeFromCart = (product) => {
    this.setState({
      cart: this.state.cart.filter((p) => p.id !== product.id),
    });
  };
}

ReactDOM.render(<App />, document.querySelector("#root"));
