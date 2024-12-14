import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
        products: data,
    };
    addToCart = (id) => {
        const productToAdd = this.state.products.find(
            (product) => product.id === id
        );
        if (productToAdd) {
            this.setState((prevState) => ({
                cart: [...prevState.cart, productToAdd],
            }));
        }
    };

    removeFromCart = (id) => {
        this.setState((prevState) => ({
            cart: prevState.cart.filter((product) => product.id !== id),
        }));
    };

    render() {
        const containerStyle = {
            display: 'flex',
            justifyContent: 'space-around',
            gap: '20px',
            width: '50%',
            margin: '0 auto',
        };

        return (
            <section style={containerStyle}>
                <Category
                    products={this.state.products}
                    onAddToCart={this.addToCart}
                    cart={this.state.cart}
                />
                <Cart cart={this.state.cart} onRemoveFromCart={this.removeFromCart} />
            </section>
        );
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
