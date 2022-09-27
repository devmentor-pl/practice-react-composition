import React from "react";
import ReactDOM from "react-dom";
import Category from "./Category";
import Cart from "./Cart";

import data from "./data.json";

class App extends React.Component {
  state = {
    cart: [],
  };

  addItem = (id, name, price, isCart) => {
    const item = {
      id,
      name,
      price,
      isCart,
    };

    this.setState((state) => {
      return {
        cart: [...state.cart, item],
      };
    });
  };
  deleteItem = (id) => {
    const { cart } = this.state;
    const item = cart.findIndex((item) => item.id === id);
    cart.splice(item, 1);

    this.setState({
      cart: cart,
    });
  };

  render() {
    const { cart } = this.state;
    return (
      <section>
        <Category addItem={this.addItem} data={data} />
        <Cart deleteItem={this.deleteItem} data={cart}></Cart>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
