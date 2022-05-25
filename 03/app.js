import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';
import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    addToCart = (item) => {
        const cart = [...this.state.cart];
        this.setState({
            cart: [...cart, item]
        });
    }

    removeFromCart = (item) => {
        const cart = [...this.state.cart]
        const updatedCart = cart.filter( (product) => {
          return product === item?'':product
        });

        this.setState({
            cart: updatedCart
        });
    }

    renderCategories = () => {
        return data.map( item => <Product key={item.id} isCategory = 'true' product = {item} addToCart = {this.addToCart}  cart = {this.state.cart}/> )
    }

    renderCart = () => {
        return this.state.cart.map( item => <Product key={item.id} product = {item} removeFromCart = {this.removeFromCart}/> )
    }

    render() {
        return ( 
            <section>
                    <Category>
                       {this.renderCategories()}
                    </Category>
                    <Cart>
                        {this.renderCart()}
                    </Cart>
            </section> 
        )
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);