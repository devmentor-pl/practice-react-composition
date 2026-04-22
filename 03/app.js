import React from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuid } from 'uuid';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        shop: [],
        cart: [],
    }

    componentDidUpdate() {
        console.log(this.state.cart)
    }

    componentDidMount() {
        this.setState(() => {
            return {
                shop: [...data]
            }
        })
    }

    removeFromCart = (data) => {
        data.isInCart = false;
        console.log(data.id)
        this.setState((state) => {
            const newList = state.cart.filter(el => el.id !== data.id)
            return {
                cart: [...newList]
            }
        })
    }

    addToCart = (data) => {

        const newItem = {
            ...data,
            id: uuid(),
            isInCart: true
        }

        this.setState((state) => {
            return {
                cart: [...state.cart, newItem]
            }
        })
    }

    render() {
        return (
            <section>
                <Category items={this.state.shop} add={this.addToCart} />
                <Cart items={this.state.cart} remove={this.removeFromCart} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
