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
    addItem = (product) => {
        this.setState(state => {
            return {
                cart: [...state.cart, product]
            }
        }) 
    }
    removeItem = (product) => {
        this.setState(state => {
            const newCart = state.cart.filter(element => element.id !== product.id);
            return {cart: newCart}
        })
    }
    render() {
        return (
            <section>
                <Category>
                    {data.map(product => {
                            if(this.state.cart.find(e => e.id === product.id)){
                                return (
                                    <Product 
                                    key={product.id}
                                    product={product}
                                    isCart={true} 
                                    remove={this.removeItem}
                                />
                                )
                            }else{
                                return (
                                    <Product 
                                    key={product.id}
                                    product={product}
                                    isCart={false} 
                                    isCategory={true}
                                    add={this.addItem}
                                />
                                )
                           }
                        })
                    }
                </Category>
                <Cart>
                    {this.state.cart.map(product => {
                        return (
                            <Product 
                                key={product.id} 
                                product={product}
                                isCategory={false}
                                remove={this.removeItem}
                            />
                        )
                    })}
                </Cart>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
