import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';
import Product from './Product';
import {v4 as uuid} from 'uuid';

class App extends React.Component {
    state = {
        cart: [],
    }

    addToBasket = (data) => {
        const { cart } = this.state;
        data.added = true;
        this.setState({
            cart: [...cart, data]
        });
    };

    removeFromBasket = (data) => {
        data.added = false;
        this.setState(state => {
            const { cart } = state;
            const list = cart.filter(el => {
                if(el.id !== data.id) {
                    return el;
                }
                return null;
            });
            return {cart: list}
        });
    };
    
    render() {
        const { cart } = this.state;

        const categoryList = data.map(el => {
            return (
                <Product 
                    type={ 'category' } 
                    onClick={ this.addToBasket } 
                    data={ el } key={ uuid() }/>
            );
        });

        const cartList = cart.map(el => {
            return (
                <Product 
                    type={ 'basket' } 
                    onClick={ this.removeFromBasket } 
                    data={ el } 
                    key={ uuid() }/>
            );
        });
        return (
            <section>
                <Category>
                    { categoryList }
                </Category>
                <Cart>
                    { cartList }
                </Cart>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);