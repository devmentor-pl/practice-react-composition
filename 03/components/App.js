import React from 'react';

import Product from './Product';

import data from '.././data.json';
import Group from './Group';

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
                <Group title={'Category'}>
                    <ul>
                        {categoryItems}
                    </ul>
                </Group>
                <Group title={'Cart'}>
                    <ul>
                        {cartItems}
                    </ul>
                </Group>
            </section >
        );
    }
}