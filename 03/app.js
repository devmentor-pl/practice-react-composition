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

    addProduct = id => {
        const product = data && data.find(item => item.id === id)
        console.log(product)
        this.setState({ cart: [...this.state.cart, product] });
    }
    removeProduct = id => {
        console.log('removeProduct', id)
        this.setState({ cart: this.state.cart.filter(item => item.id !== id) });
    }
    inCart = id => {
        const disabled = !!this.state.cart.find(item => item.id === id)
        return disabled
    }

    render() {
        // Product to Category
        const list = data && data.map(item => {
            const disabled = this.inCart(item.id)
            return (
                <Product key={item.id} item={item} 
                    addProduct={this.addProduct} disabled={disabled}
                />
            )
        })

        // Product to Cart from state
        const { cart } = this.state
        const listCart = cart && cart.map(item => {
            return (
                <Product key={item.id} item={item} isCart={true}
                    removeProduct={this.removeProduct} 
                />
            )
        })

        return (
            <section>
                <Category>
                    {list}
                </Category>
                <Cart>
                    {listCart}
                </Cart>
            </section>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);