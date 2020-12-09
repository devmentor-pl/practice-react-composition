import React from 'react';
import ReactDOM from 'react-dom';
import Category from './Components/Category';
import Cart from './Components/Cart';
import Product from './Components/Product';
import data from './data.json';
import { v4 as uuid } from 'uuid';

class App extends React.Component {
    state = {
        cart: [],
    }
    addToBasket = newProduct => {
        if (this.state.cart.includes(newProduct)) {
            return
        } else {
            this.setState(state => {
                return {
                    cart: [...state.cart, newProduct ]
                }
            })
        }

    }
    removeFromBasket = id => {
        const cart = this.state.cart.filter(item => item.id !== id)
        this.setState({
            cart
        })
    }
    // ta funkcja zawsze zwraca mi to samo, czyli działa źle. gdzie szukać błędu?
    getNewKey = () => this.state.cart.reduce((acc, item) => acc > item.id ? acc : item.id, 0) + 1;

    render() {
        const { products } = data;
        const { cart } = this.state;

        const basketItems = cart.map(product => {
            if (product === undefined) {
                return
            }
            const { name, price } = product;
            return (
                <Product
                    key={ uuid() }
                    name={ name }
                    price={ price }
                    product={ product }
                    basketItem={ true }
                    removeFromBasket={ this.removeFromBasket }
                />
            )
        });

        const availableProductsList = products.map(product => {
            const { id, name, price } = product;
            return (
                <Product
                    key={ id }
                    id={ id }
                    name={ name }
                    price={ price } 
                    addToBasket={ this.addToBasket }
                    product={ product }
                />
            )
        })

        return (
            <section style={{backgroundColor: '#f3f3f3'}}>
                <Category>
                    { availableProductsList }
                </Category>
                <Cart>
                    { basketItems }
                </Cart>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);