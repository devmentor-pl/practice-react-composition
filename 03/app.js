import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    addProductToCart = (id) => {
        const product = data.find(item => item.id === id)

        if(product) {
            this.setState(prevState => ({cart: [...prevState.cart, product]}))
        }
    }

    removeProductFromCart = (id) => {
        const cart = this.state.cart.filter(item => item.id !== id)
        console.log(cart)
        if(cart) {
            this.setState({cart: cart})
        }
    }

    isProductInCart = (id) => {
        return !!this.state.cart.find(product => product.id === id)
    }

    render() {
        const { cart } = this.state

        const list = data.map(item => <Product isCart={this.isProductInCart(item.id)} key={item.id} data={item} add={this.addProductToCart}/>)
        const cartList = cart.map(item => <Product inCart={true} key={item.id} data={item} remove={this.removeProductFromCart}/>)
        

        return (
            <section>
                <Category>
                    {list}
                </Category>
                <Cart>
                    {cartList}
                </Cart>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
