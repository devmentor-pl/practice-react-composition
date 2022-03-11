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
                <Category data={data} cart={this.state.cart} addProduct={this.addProduct} isInCart={this.isInCart}/>
                <Cart data={data} cart={this.state.cart} removeProduct={this.removeProduct} />
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


    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);