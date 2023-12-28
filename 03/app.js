import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
        products: data,
    }
    
    addToCart = (product) => {
        this.setState(prevState => ({
            cart: [...prevState.cart, product],
        }));
    }

    removeFromCart = (id) => {
        this.setState(prevState => ({
            cart: prevState.cart.filter(product => product.id !== id),
        }));
    }

    render() {
        return (
            <section>
                <Category products={this.state.products} addToCart={this.addToCart} cart={this.state.cart} />
                <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
