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
        const {cart} = this.state;
        return (
            <section>
                <Category>
                    {this.displayCategoryProducts(data)}
                </Category>
                <Cart>
                    {this.displayCartProducts(cart)}
                </Cart>
            </section>
        )
    }

    displayCategoryProducts(data) {
        return data.map(item => <Product name={item.name} price={item.price} buttonText={'Dodaj do koszyka'} onClick={this.addItem} />)
    }

    displayCartProducts(data) {
        return data.map(item => <Product name={item.name} price={item.price} buttonText={'Usuń z koszyka'} onClick={this.removeItem} />)
    }

    // Raczej nie powinienem tutaj operować na DOM ale wymiękam już nie mam pojęcia jak to inaczej ugryźć, podobnie z disabled

    addItem = e => {
        e.preventDefault();
        const currItem = e.target.parentElement;
        const name = currItem.firstElementChild.firstElementChild.textContent;
        const price = currItem.children[1].textContent;
        const item = {name, price};
        this.setState({
            cart: [...this.state.cart, item],
        });
    }

    removeItem = e => {
        e.preventDefault();
        const currItem = e.target.parentElement;
        const name = currItem.firstElementChild.firstElementChild.textContent;
        const currItems = this.state.cart.filter(el => el.name !== name)
        this.setState({
            cart: currItems
        });
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);