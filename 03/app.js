import React from 'react';
import ReactDOM from 'react-dom';

import Category from './components/Category';
import Cart from './components/Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }
    
    render() {
        const {cart} = this.state;
        return (
            <section>
                <Category data={data} cart={cart} addItem={this.buyItem}/>
                <Cart data={data} cart={cart} remove={this.removeItem}/>
            </section>
        )
    }

    buyItem = (id) => {
        const {cart} = this.state
        this.setState({
            cart:[...cart, id]
        })
    }

    removeItem = (id) => {
        const {cart} = this.state;
        const newBasket = cart.filter((el) => {
            return el !== id;
        });

        this.setState({
            cart:newBasket,
        });
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);