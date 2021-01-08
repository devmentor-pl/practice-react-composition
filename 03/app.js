import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: []
    }

    isProductPurchased = (productId) => {
        const {cart} = this.state

        if(cart.some(product => product.id === productId)) return true

        return false
    }

    addToCart = (product) => {
        this.setState(state => {
            return {
                cart: [...state.cart, product]
            }
        })
    }

    removeFromCart = (product) => {
        const oldCart = [...this.state.cart]
        const newCart = oldCart.filter(item => {
            if(product.id !== item.id) return item
        })

        this.setState(
            {cart: newCart}
        )
    }
    
    render() {
        return (
            <section>
                <Category productsList={ data } isProductPurchased = { this.isProductPurchased } addToCart={ this.addToCart } />
                <Cart cart={ this.state.cart } removeFromCart={ this.removeFromCart }/>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);