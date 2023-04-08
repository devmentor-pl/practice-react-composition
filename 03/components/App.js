import React from 'react';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';

import data from '.././data.json';

export default class App extends React.Component {
    state = {
        cart: [],
    }

    handleAddToCart = item => {
        this.setState(state => {
            return {
                cart: [...state.cart, item],
            }
        });

    }

    handleRemoveFromCart = item => {
        this.setState(state => {
            const newCart = state.cart.filter(cartItem => cartItem.id !== item.id);

            return {
                cart: newCart,
            }
        })
    }

    render() {
        const { cart } = this.state;

        const categoryItems = data.map(item => {
            const isCart = cart.find(cartItem => item.id === cartItem.id);
            const button = {
                buttonText: 'Add to cart',
                disabled: isCart ?
                    true
                    :
                    false,
                onClick: this.handleAddToCart,
            }

            return <Product
                key={item.id}
                itemData={item}
                button={button}

            />;
        });

        const cartItems = cart.map(item => {
            const button = {
                buttonText: 'Remove',
                disabled: false,
                onClick: this.handleRemoveFromCart,
            }

            return < Product
                key={item.id}
                itemData={item}
                button={button}
            />;
        });


        return (
            <section>
                <Category>
                    <ul>
                        {categoryItems}
                    </ul>
                </Category>
                <Cart>
                    <ul>
                        {cartItems}
                    </ul>
                </Cart>
            </section >
        );
    }
}