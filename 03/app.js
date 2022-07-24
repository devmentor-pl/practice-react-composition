import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';
import Product from './Product';

import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
    state = {
        cart: [],
    };

    addItemToCart = (item) => {
        this.setState(prevState => ({
            cart: [...prevState.cart, item]
        }));
    };

    removeItemFromCart = (id) => {
        const { cart } = this.state;

        const filterArr = cart.filter(item => {
            return item.id !== id;
        });

        this.setState({ cart: [...filterArr] });
    };

    isDisabled = (id) => {
        const { cart } = this.state;

        const isTrue = cart.some(item => item.id === id);
        return isTrue;
    };

    render() {
        const { cart } = this.state;
        return (
            <section>
                <Category>
                    {data.map(item => { return <Product key={uuidv4()} addItemToCart={this.addItemToCart} isDisabled={this.isDisabled} data={item} name={item.name} price={item.price} id={item.id} isCategory={true} /> })}
                </Category>
                <Cart>
                    {cart.map(item => { return <Product key={uuidv4()} removeItemFromCart={this.removeItemFromCart} name={item.name} price={item.price} id={item.id} isCart={true} /> })}
                </Cart>
            </section>
        );
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);