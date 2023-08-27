import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

import Product from './Product';

class App extends React.Component {
    state = {
        cart: [],
    }

    addToCart = (item) => {
        this.setState(state => {
            return {
                cart: [...state.cart, item]
            }
        })
    }

    removeFromCart = (item) => {
        this.setState(state => {
            const items = state.cart.filter(el => {
                return el.id !== item.id
            })
            return { cart: items }
        })
    }


    isInCart(id) {
        return this.state.cart.find(item => item.id === id)
    }


    render() {
        const list = data.map(item => <Product
            key={item.id}
            data={item}
            isCategory={true}
            onClick={this.addToCart}
            inCart={this.isInCart(item.id)}
        />)

        return (
            <section>
                <Category>
                    <h2>Category</h2>
                    {list}
                </Category>
                <Cart items={this.state.cart} onClick={this.removeFromCart} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
