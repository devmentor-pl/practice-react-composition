import React from 'react';
import ReactDOM from 'react-dom';

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
                <Category data={data} cart={this.state.cart} onClick={this.addToCart} />
                <Cart cart={this.state.cart} onClick={this.removeFromCart} />
            </section>
        )
    }

    addToCart = (product) => {
        this.setState( state => {
            return {
                cart: [...state.cart, product]
            }
        })
    }

    removeFromCart = (product) => {
        this.setState( state => {
            return {
                cart: [...state.cart.filter(
                    item => item !== product
                )]
            }
        })
    }
}






ReactDOM.render(
    <App />,
    document.querySelector('#root')
);


