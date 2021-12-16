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

  handleAddProduct = (product) => {
    product.isAddedToCart = true;

    this.setState((state) => {
      return {
        cart: [...state.cart, product],
      };
    });
  };

  handleRemoveProduct = (product) => {
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
          addToCart={this.handleAddProduct}
        />
      );
    });

    const cartList = this.state.cart.map((product) => {
      return (
        <Product
          key={product.id}
          product={product}
          isCategory={false}
          removeFromCart={this.handleRemoveProduct}
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