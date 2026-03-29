import React from "react";
import { createRoot } from "react-dom/client";

import Category from "./components/Category";
import Cart from "./components/Cart";
import Product from "./components/Product";

import data from "./data.json";

class App extends React.Component {
  state = {
    cart: [],
    products: [],
  };

  componentDidMount() {
    if (this.state.products.length === 0) {
      this.setState({ products: data });
    }
  }

  addToCart = (id) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, id],
    }));
  };

  removeFromCart = (id) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((itemId) => itemId !== id),
    }));
  };

  render() {
    const { products, cart } = this.state;
    const cartItems = products.filter((product) => cart.includes(product.id));

    return (
      <section>
        <Category>
          {products.map((item) => (
            <Product
              key={item.id}
              {...item}
              isCategory={true}
              isCart={cart.includes(item.id)}
              addToCartClick={this.addToCart}
            />
          ))}
        </Category>
        <Cart>
          {cartItems.map((item) => (
            <Product
              key={item.id}
              {...item}
              isCart={true}
              removeFromCartClick={this.removeFromCart}
            />
          ))}
        </Cart>
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
