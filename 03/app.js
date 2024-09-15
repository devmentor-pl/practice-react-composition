import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';
import Product from './Product'

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }


    addProduct = (id) => {
        const product = data.find(item => item.id === id)

        if(product) {
            this.setState({
                cart: [...this.state.cart, product]
            })
        }
    }

    removeProduct = (id) => {
        const cart = this.state.cart.filter(item => item.id !== id)
        this.setState({
            cart
        })
        
    }


    checkCart = (id) => {
        return !!this.state.cart.find(item => item.id === id)
    }
    
    render() {
        const { cart } = this.state

        return (
            <section>
                <Category>
                    {data.map(item => (
                        <Product
                            checkCart={() => this.checkCart(item.id)}
                            key={item.id}
                            data={item}
                            clickHandler={this.addProduct}
                        />
                    ))}

                </Category>
                <Cart>
                    {cart.map(item => <Product isInCart={true} key={item.id} data={item} clickHandler={this.removeProduct}/>)}
                </Cart>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
