import React from "react";
import ReactDOM from "react-dom";

import Category from "./Category";
import Cart from "./Cart";
import Product from "./Product";

import data from "./data.json";

import "./app.css";
class App extends React.Component {
  state = {
    cart: [],
  };

  handleAddProductToCart = (product) => {
    product.isAddedToCart = true;

    this.setState((state) => {
      return {
        cart: [...state.cart, product],
      };
    });
  };

  handleRemoveProductFromCart = (product) => {
    product.isAddedToCart = false;

    this.setState((state) => {
      const newCart = state.cart.filter((item) => item.id !== product.id);

      return {
        cart: newCart,
      };
    });
  };

  render() {
    const productsList = data.map((product) => {
      return (
        <Product
          key={product.id}
          product={product}
          isCategory={true}
          onAddToCart={this.handleAddProductToCart}
        />
      );
    });

    const cartList = this.state.cart.map((product) => {
      return (
        <Product
          key={product.id}
          product={product}
          isCategory={false}
          onRemoveFromCart={this.handleRemoveProductFromCart}
        />
      );
    });

    return (
      <section>
        <Category>{productsList}</Category>
        <Cart>{cartList}</Cart>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
