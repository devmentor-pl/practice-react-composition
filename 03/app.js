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
    
    render() {
        const productList = (arr, type, cartItems) => {
            return arr.map( item => <Product key={arr.indexOf(item)} isCategory = {type==='category'?true:false} isCart = {type==='product'?true:false} product = {item}
            addToCart = {this.addToCart} removeFromCart = {this.removeFromCart} cart = {cartItems}/> )
        }
       
        return ( 
            <section>
                    <Category>
                        {productList(data,'category', this.state.cart)}
                    </Category>
                    <Cart>
                        {productList(this.state.cart, 'product')}
                    </Cart>
            </section> 
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);