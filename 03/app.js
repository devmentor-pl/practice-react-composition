import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

// console.log(data)

class App extends React.Component {
    state = {
        cart: [],
    }

    addToCart = (item) => {
        this.setState(state => {
            return {
                cart: [...state.cart, item]
            }
        })
    }

    removeFromCart = (id) => {
        this.setState(state => {
            const items = state.cart.filter(item => {
                return item.id !== id})
            return { cart: items }
        })
    }

    render() {
        return (
            <section>
                <Category items={data} addToCart={this.addToCart} />
                <Cart items={this.state.cart} removeFromCart={this.removeFromCart} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
