import React from 'react';
import ReactDOM from 'react-dom';

import Category from './components/Category';
import Cart from './components/Cart';
import Product from './components/Product';

import data from './data.json';

class App extends React.Component {
  state = {
    cart: [],
  };
  
  addProductToCart = (product) => {
    product.isAddedToCart = true;
    this.setState((state) => {
      return {
        cart: [...state.cart, product],
      };
    });
  };
  
  removeProductFromCart = (product) => {
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
          onAddToCart={this.addProductToCart}
        />
      );
    });
    
    const cartList = this.state.cart.map((product) => {
      return (
        <Product
          key={product.id}
          product={product}
          isCategory={false}
          onRemoveFromCart={this.removeProductFromCart}
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

ReactDOM.render(<App />, document.querySelector('#root'));