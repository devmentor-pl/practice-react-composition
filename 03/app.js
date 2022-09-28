import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    addProduct = (id) => {
        const filteredObjects = data.filter(n => n.id === id);
        this.setState(state => {
            return{
        cart: [...state.cart, filteredObjects[0]]
            };
        });
    }

    removeProduct = (id) => {
        const remainingProducts = this.state.cart.filter(n => n.id !== id);
        this.setState({
            cart: remainingProducts,
        });
    }
    
    render() {
        const  { cart } = this.state;
        console.log(cart);
        return (
            <section>
                <Category data={data} buttonPress={this.addProduct}/>
                <Cart items={cart} buttonPress={this.removeProduct}/>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);

