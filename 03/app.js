import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }
    addToCartHandler = (productObj) => {
        this.setState((prevState) => ({
          cart: [...prevState.cart, productObj],
        }))
      };
      removeFromCart = (id) => {
        this.setState((prevState) => ({
          cart: prevState.cart.filter((product) => product.id !== id)
        }));
      }
    render() {
      const { cart } = this.state
        return (
            <section>
                <Category data={ data } addToCartHandler={this.addToCartHandler} />
                <Cart items={ cart } removeFromCart={this.removeFromCart}/>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
