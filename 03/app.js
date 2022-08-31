import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    addProductToCart = (id) => {
        const productToAdd = data.find(item => item.id === id)

        if(productToAdd) {
            this.setState({
                cart: [...this.state.cart, productToAdd]
            })
        }
    }

    removeProductfromCart = (id) => {
        const updatedCart = this.state.cart.filter(item => item.id !== id)

        this.setState({
            cart: updatedCart
        })
    }

    isInCart = (id) => {
        return !!this.state.cart.find(item => item.id === id)
    }
    
    render() {
        const { cart } = this.state

        return (
            <section>
                <Category>
                    {data.map(item => {
                        return (
                            <Product
                                key={item.id}
                                data={item}
                                clickHandler={this.addProductToCart}
                                isCategory={true}
                                isInCart={this.isInCart(item.id)}
                            />
                        )
                    })}
                </Category>
                <Cart> 
                    {cart.map(item => {
                        return (
                            <Product
                                key={item.id}
                                data={item}
                                clickHandler={this.removeProductfromCart}
                            />
                        )
                    })}
                </Cart>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);