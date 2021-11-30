import React from 'react';
import ReactDOM from 'react-dom';
import {v4 as uuid} from 'uuid';
import Category from './Category';
import Cart from './Cart';

import data from './data.json';


class App extends React.Component {
    state = {
        category: data,
        cart: [],
    }
    
    addToCart = (item) => {
        const newCart = [...this.state.cart, {...item, isAdded: true}]
        this.setState(()=> { 
            const updatedCategory = this.changeIsAdded(item);
            return {
                category: updatedCategory,
                cart: newCart}
        })
    }
    
    removeFromCart = (item) => {
        const newCart = [...this.state.cart].filter(prod=> prod !== item)
        this.setState(()=> { 
            const updatedCategory = this.changeIsAdded(item);
            return {
                category: updatedCategory,
                cart: newCart}
        })
    }

    changeIsAdded(item) {
        return this.state.category.map(prod => {
            if (item.name === prod.name) {
                return {...prod, isAdded: !item.isAdded}
            }
            return prod;
        })
    }

    render() {
        const copyCategoryItems = this.state.category.map(el=>{ 
            return {...el, id:uuid()} // chyba można nadpisac id ?? 
        })
        const copyCartItems = this.state.cart.map(el=>{ 
            return {...el, id:uuid()}
        })
        return (
            <section>
                <Category items = {copyCategoryItems} onClick={this.addToCart}> 
                </Category>
                <Cart items = {copyCartItems} onClick={this.removeFromCart}/>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);