import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';
import { element } from 'prop-types';

class App extends React.Component {
    state = {
        cart: [],

    }

    addToCart(e) {

        const productName = e.currentTarget.dataset.name
        const productPrice = e.currentTarget.dataset.price

        const product = { productName, productPrice }

            e.currentTarget.setAttribute('disabled', '');
  
        this.setState({

            cart: [...this.state.cart, product]
        })

    }

    deleteFromCart(e) {
 
        const cart = this.state.cart
        console.log(cart)

        const cartAfterDelete = cart.filter((element, index) => {
          
            return index !== parseInt(e.currentTarget.dataset.index)
        })

        this.setState({
            cart: cartAfterDelete
        })


    }

    render() {
        console.log(this.state.cart)
        return (
            <section>
                <Category onClickAdd={this.addToCart.bind(this)} data={data}></Category>
                <Cart onClickDelete={this.deleteFromCart.bind(this)} cart={this.state.cart} />

            </section>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);