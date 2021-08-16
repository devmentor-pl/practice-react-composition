import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';
import Product from './Product'

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    addProduct = product => {
        product.isCart = true;
        this.setState({ cart: [...this.state.cart, product] })
    }

    removeProduct = product => {
        product.isCart = false;
        const newAddedProduct = this.state.cart.filter(cartProduct => cartProduct.id !== product.id);
        this.setState({ cart: newAddedProduct })
    }


    renderCategoryList() {
        return data.map(product => {

            return (
                <Product
                    key={product.id}
                    onAdd={this.addProduct}
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
                    onRemove={this.removeProduct}
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