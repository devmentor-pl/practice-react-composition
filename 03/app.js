import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';
import Product from './product.js'

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }
    list = (array, btnDel, func) => {
        return array.map((d) => {

        const id = d.id;

        return <Product d={d} btn={btnDel} func={func} id={id}/>
    })
    }
    addToCart = (e) => {
        e.target.disabled = true;
        data.forEach((d) => {
            
            if(e.target.parentElement.id == d.id ) {
                return this.setState({cart: [...this.state.cart, d]})
            }
        })
    }
    filteredCart = (id) => {
        return this.state.cart.filter((c) => {
            console.log("state", c.id, id)
            
            return c.id != id
        })
    }
    removeFromCart = (e) => {
        this.setState({cart: this.filteredCart(e.target.parentElement.id)})
        data.forEach((d) => {
            
            if(e.target.parentElement.id == d.id ) {
               const cl = document.querySelector(`.cl${d.id}`);
               cl.disabled = false;

            }
        })
    }
    render() {
        
        const {cart} = this.state;
        
        return (
            <section>
                <Category list={this.list(data, "category", this.addToCart)}/>
                <Cart list={this.list(cart, "cart", this.removeFromCart)}/>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);