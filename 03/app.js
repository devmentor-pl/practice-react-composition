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
                <Category data={data} addProduct={this.addProduct} cart={this.state.cart}/>
                <Cart data={data} removeProduct={this.removeProduct} cart={this.state.cart}/>
            </section>
        )
    }

    addProduct = (product) => {
        this.setState(state=>{
            return {
                cart: [...state.cart, product],
            }
        })
    }

    removeProduct = productId => {
        const currProduct = state.cart.filter(item => item !== productId);
        this.setState({
                cart: currProduct
        })
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);