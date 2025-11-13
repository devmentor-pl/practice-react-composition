import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    addProduct = (product) => {
        this.setState((prevState) => ({
            cart: [...prevState.cart, product],
        }));
    };

    removeProduct = (productId) => {
        this.setState((prevState) => ({
            cart: prevState.cart.filter(product => product.id !== productId),
        }));
    };
    
    render() {
        const { cart } = this.state;
        return (
            <section>
                <Category data={data} addProduct={this.addProduct} cart={cart}/>
                <Cart cart={ cart } removeProduct={this.removeProduct}/>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
