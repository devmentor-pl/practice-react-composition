import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }
    
    render() {
        return (
            <section>
                <Category onClick={this.addToCart} data={data} isProductInCart={this.isProductInCart}/>

                <Cart onClick={this.removeFromCart} cart={this.state.cart}/>


            </section>
        )
    }

    removeFromCart = (id) => {
        this.setState({
            cart: [...this.state.cart.filter(product => product.id !== id)]
        })
    }

    addToCart = (product) => {
        this.setState({
            cart: [...this.state.cart, {...product}]
        })
    }

    isProductInCart = (id) => {
        return this.state.cart.some(product => product.id === id)
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
