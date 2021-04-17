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

    addItem = (product) => {
        product.isCart = true;
        
        this.setState({
            cart: [...this.state.cart, product]
        });
    }

    removeItem = (product) => {
        const copyItemsCart = [...this.state.cart];
        product.isCart = false;
        
        const filterItems = copyItemsCart.filter(item => {
            return item.id !== product.id;
        });

        this.setState({
            cart: filterItems
        });
    }



    render() {
        const productList = data.map(item => {
            return(
                <Product 
                    prod = {item}
                    name={item.name}
                    price = {item.price}
                    isCategory = {true}
                    add = {this.addItem}
                />
            )
        });

        const productCart = this.state.cart.map(item => {
            return (
                <Product 
                    prod = {item}
                    name={item.name}
                    price = {item.price}
                    remove = {this.removeItem}
                />
            )
        });

        return (
            <section>
                <Category> {productList} </Category>
                <Cart> {productCart} </Cart>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);