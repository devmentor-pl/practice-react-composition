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
    render() {
        const {cart} = this.state;
        return (
            <section>
                <Category>
                    {data.map(product => {
                        return (
                            <Product 
                            key={product.id} 
                            name={product.name} 
                            disabled={this.state.cart.includes(product)} 
                            price={product.price} 
                            onClick= { () => this.addToCart(product)} 
                            btnText={'Dodaj do koszyka'}/> 
                        )}
                    )}
                </Category>
                <Cart>
                {cart.map(product => {
                        return (
                            <Product 
                            key={product.id} 
                            name={product.name} 
                            price={product.price} 
                            onClick={() => this.removeFromCart(product.id)} 
                            btnText={'Usuń'}/> 
                        )}
                    )}
                </Cart> 
            </section>
        )
    }

    addToCart = (product)=> {
        this.setState(state => {
            return {
                cart: [...state.cart, product]
            }
        })
    }

    removeFromCart(id)  {
        const currCart =  this.state.cart.filter(product => product.id !== id )
        return this.setState({cart: currCart})    
     }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);