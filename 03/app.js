import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    render() {
        return (
            <section>
                <Category data={data} addProduct={this.addProduct} isInCart={this.isInCart}/>
                <Cart cart={this.state.cart} removeProduct={this.removeProduct} />
            </section>
        )
    }

    addProduct = product => {
        const {cart} = this.state;
        this.setState({
                cart: [...cart, product],
        })
    }

    removeProduct = product => {
        const {cart} = this.state;
        const currProduct = cart.filter(item => item !== product);
        this.setState({
                cart: currProduct,
        })
    }

    isInCart = id => {
        console.log(id);
        const {cart} = this.state;
        console.log(cart);
        return cart.find(item => {
            if(item.id === id){
                console.log('true');
                return true
            }
            console.log('false');
            return false
        })
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);