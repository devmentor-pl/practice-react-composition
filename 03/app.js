import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    handleClickAdd = e => {
        e.preventDefault();
        const cartLi = e.target.previousElementSibling;

        const cartId = parseInt(cartLi.dataset.id);
        const cartName = cartLi.dataset.name;
        const cartPrice = parseInt(cartLi.dataset.price);

        const cart = {
            id: cartId,
            name: cartName,
            price: cartPrice
        }

        this.addCart(cart);

    }

    addCart = (cart) => {
        this.setState(state => {
            return {
                cart: [...state.cart, cart],
            };
        });
    }


    handleClickRemove = e => {
        e.preventDefault();
        const cartLi = e.target.previousElementSibling;

        const cartId = parseInt(cartLi.dataset.id);

        this.removeCart(cartId);
    }

    removeCart(cartId) {
        const currCart = this.state.cart.filter(
            cart => cart.id != cartId
        );
        this.setState({
            cart: currCart,
        });
    }


    render() {
        const { cart } = this.state;
        return (
            <section>
                <Category data={data} onClick={this.handleClickAdd} itemsCart={cart} />
                <Cart items={cart} onClick={this.handleClickRemove} />
            </section>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);