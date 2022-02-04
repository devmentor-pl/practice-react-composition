import React from "react";
import ReactDOM from "react-dom";

import Category from "./Category";
import Cart from "./Cart";

import data from "./data.json";

class App extends React.Component {
  state = {
    cart: [],
  };

  addItemToCart = (item) => {
    const newItem = item;
    this.setState((state) => {
      return {
        cart: [...state.cart, newItem],
      };
    });
  };

  removeItemfromCart = (item) => {
    console.log(this.state.cart.indexOf(item));

    const indexOfItemToRemove = this.state.cart.indexOf(item);
    this.state.cart.splice(indexOfItemToRemove, 1);
    this.setState({
      cart: [...this.state.cart],
    });
  };

  render() {
    return (
      <section>
        <Category items={data} addItemToCart={this.addItemToCart} />
        <Cart
          cartItems={this.state.cart}
          removeItemfromCart={this.removeItemfromCart}
        />
      </section>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
