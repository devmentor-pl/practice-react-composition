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
        console.log(this.state)
        return (
            <section>
                <Category data={data} cart={this.state.cart} onClick={this.addToCart} />
                <Cart data={data} cart={this.state.cart} onClick={this.removeFromCart} />
            </section>
        )
    }

    addToCart = (id) => {
        this.setState( state => {
            return {
                cart: [...state.cart, id ]
            }
        })
    }

    removeFromCart = (id) => {
        this.setState( state => {
            return {
                cart: [...state.cart.filter(
                    item => item !== id
                )]
            }
        })
    }
}






ReactDOM.render(
    <App />,
    document.querySelector('#root')
);


