import React from 'react';
import ReactDOM from 'react-dom';

import Category from './components/Category';
import Cart from './components/Cart';
import Product from './components/Product'

import data from './data.json';

class App extends React.Component {
    state = {
        cart: []
    }

    addToCart = product => {
        product.isCart = true;
        this.setState({ cart: [...this.state.cart, product] })
    }

    removeFromCart = product => {
        product.isCart = false;
        const updatedCart = this.state.cart.filter(cartProd => cartProd.id !== product.id);
        this.setState({ cart: updatedCart })
    }

    renderCategoryList() {
        return data.map(product => {
            return (
                <Product
                    key={product.id}
                    onAdd={this.addToCart}
                    isCategory={true}
                    product={product} />
            )
        })
    }

    renderCartList() {
        return this.state.cart.map(product => {
            return (
                <Product
                    key={product.id}
                    onRemove={this.removeFromCart}
                    isCategory={false}
                    product={product} />
            )
        })
    }

    render() {
        return (
            <section>
                <Category>
                    {this.renderCategoryList()}
                </Category>
                <Cart>
                    {this.renderCartList()}
                </Cart>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);