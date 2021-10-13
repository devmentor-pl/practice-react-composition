import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        category: data,
        cart: [],
    }
    
    addToCart = (item) => {
        const newCart = [...this.state.cart, item]
        this.setState(()=> {
            return {cart: newCart}
        })
        this.changeDisable(item);
    }
    
    removeFromCart =(item) => {
        const newCart = [...this.state.cart].filter(prod=> prod !== item)
        this.setState({cart:newCart});
        this.changeDisable(item);
    }

    changeDisable(item) {
        this.setState(() => this.state.category.map(prod=>{
            if(prod === item) {
                item.isAdded = !item.isAdded || false;
                return item;
            }
        }))
    }

    render() {
        return (
            <section>
                <Category items = {data} onClick={this.addToCart}> 
                </Category>
                <Cart items = {this.state.cart} onClick={this.removeFromCart}/>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);