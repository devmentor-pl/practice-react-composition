import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }
    
    addIntoCart = (product) => {
        const exists = data.find(findProduct => findProduct.id === product.id)
    
        if (exists){
          this.setState(prevState => {
            return { cart: [...prevState.cart, { ...product }] }
          })
        }
    }

    removeFromCart = product => {
        const { cart } = this.state
        const filteredProducts = cart.filter(productCart => productCart.id !== product.id)
        this.setState(() => {
          return { cart: [...filteredProducts] }
        })
      }
    
    render() {
        const { cart } = this.state
        return (
            <section>
                <Category>
                {data.map((product, index) => 
                <Product 
                key={index} 
                product={product} 
                click={this.addToCart} 
                buttonValue='ADD' 
                inCart={this.inCart(product)}
                />)}
                </Category>
                <Cart>
                {cart.map((product, index) => 
                <Product 
                key={index} 
                product={product} 
                click={this.removeFromCart} 
                buttonValue='REMOVE' 
                isCart={true} />)}
            </Cart>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
