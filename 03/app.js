import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './components/Category';
import Cart from './components/Cart';

import data from './data.json';

import './main.css';


class App extends React.Component {
    state = {
        cart: [],
    }

    addToCart = (product) => {
        this.setState(prevState => ({
            cart: [...prevState.cart, product]
        }))
    }

    removeFromCart = (product) => {
        this.setState(prevState => ({
            cart: prevState.cart.filter(item => item.id !== product.id)
        }))
    }
    
    render() {
        return (
            <section>
                <Category cart={this.state.cart} addToCart={this.addToCart}/>
                <Cart cart={this.state.cart} removeFromCart={this.removeFromCart}/>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
