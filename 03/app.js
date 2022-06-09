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

        return (
            <section>
                <Category>{this.renderCategory()}</Category>
                <Cart>{this.renderCart()}</Cart> 
            </section>
        )
    }

    renderCategory() {
        return ( data.map(product => {
                    return (
                        <Product isCategory={true} key={product.id} name={product.name} disabled={this.state.cart.includes(product)} price={product.price} onClick= { () => this.addToCart(product)} btnText={'Dodaj do koszyka'}/>  //onClick={onClick}
                    )
                })
    )}

    renderCart() {   
        return (
            this.state.cart.map(product => {
                return (
                    <Product isCategory={false} key={product.id} name={product.name} price={product.price} onClick={() => this.removeFromCart(product.id)} btnText={'Usuń'}/>  
                )
            }
        )
    )}

    addToCart = async(product)=> {
        await this.setState(state => {
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