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
                <Category data={data}>
                    <Product data={data} isCategory={true} products={this.state} addItem={(e) => this.addToCart(e.target)}/>
                </Category>
                <Cart data={data}>
                    <Product data={data} isCategory={false} products={this.state} removeItem={(e) => this.removeItem(e.target)}/>
                </Cart>
            </section>
        )
    }

    addToCart(curr) {
        const {cart} = this.state;
        const item = curr.parentElement.firstChild.innerText;

        this.setState({
            cart:[...this.state.cart, item]
        })
        // curr.disabled=true;
    }

    removeItem(curr){
        console.log(this.state.cart.id)
        console.log(curr.parentElement);

    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);