import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';
import Product from './Product';

class App extends React.Component {
    state = {
        cart: [],
        cartNames: [],
    }

    addToCart = (product) => {
        const { cart, cartNames } = this.state
        this.setState({
            cart: [...cart, product],
            cartNames: [...cartNames, product.name]
        })
    }

    removeFromCart = (product) => {
        const { cart, cartNames } = this.state
        const newCart = cart.filter(el => el.name !== product.name)
        const newCartName = cartNames.filter(el => el !== product.name)

        this.setState({
            cart: newCart,
            cartNames: newCartName
        })
    }

    render() {
        return (
            <section>
                <Category>
                    {
                        data.map(product => {
                            if (this.state.cartNames.includes(product.name)) {
                                return <Product
                                    product={product}
                                    isCategory={true}
                                    addToCart={(e) => this.addToCart(product)}
                                    isAvailable={false}
                                />
                            } else {
                                return <Product
                                    product={product}
                                    isCategory={true}
                                    addToCart={(e) => this.addToCart(product)}
                                    isAvailable={true}
                                />
                            }
                        })
                    }
                </Category>
                <Cart>
                    {
                        this.state.cart.length ?
                            this.state.cart.map(product => {
                                return <Product
                                    product={product}
                                    isCategory={false}
                                    removeFromCart={(e) => this.removeFromCart(product)}
                                />
                            })
                            :
                            null
                    }
                </Cart>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
