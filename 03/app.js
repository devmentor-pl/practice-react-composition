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
                <Category data={data} cart={this.state.cart} addProduct={this.addProduct}/>
                <Cart data={data} cart={this.state.cart} removeProduct={this.removeProduct} />
            </section>
        )
    }

    addProduct = productId => {
        const {cart} = this.state;
        this.setState({
                cart: [...cart, productId],
        })
    }

    removeProduct = productId => {
        const {cart} = this.state;
        const currProduct = cart.filter(item => item !== productId);
        this.setState({
                cart: currProduct,
        })
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);