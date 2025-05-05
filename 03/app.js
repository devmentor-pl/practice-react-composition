import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    addToCart = (product) => {
        this.setState(state => {
            return {
                cart: [...state.cart, product]
            }
            
        }) 
    }

    removeFromCart = (product) => {
        this.setState((state) => {
            const indexToRemove = state.cart.findIndex((item) => item.id === product.id);

            if (indexToRemove !== -1){
                const newCart = [...state.cart];
                newCart.splice(indexToRemove, 1);
                return {
                    cart: newCart
                }
            }

            return null;
        })
    }
    
    render() {
        return (
            <section>
                <Category addToCart={this.addToCart} data={data}/>
                <Cart removeFromCart={this.removeFromCart} cart={this.state.cart}/>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
