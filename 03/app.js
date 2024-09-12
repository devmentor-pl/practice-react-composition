import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    addToCart = product => {
        this.setState(state=> {
            return {
                cart: [...state.cart, product]
            }
        })
    }

    removeFromCart = product => {
        this.setState( state => {
            return {
                cart: [...state.cart.filter(
                    item => item !== product
                )]
            }
        })
    }
    
    render() {
        return (
            <section>
                <Category 
                    data={data} 
                    onClick={this.addToCart}
                    cartState={this.state.cart}
                    />
                <Cart 
                    data={data} 
                    onClick={this.removeFromCart}
                    cartState={this.state.cart}
                    />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);