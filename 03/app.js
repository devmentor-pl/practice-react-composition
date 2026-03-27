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
      console.log("data", data);
      this.setState({ products: data });
    }
  }

  render() {
    const products = this.state.products;
    const productsList = products.map((item) => (
      <Product key={item.id} product={item} />
    ));
    return (
      <section>
        <Category>{productsList}</Category>
        <Cart />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
