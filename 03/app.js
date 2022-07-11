import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [
                {
                    "id": 1,
                    "name": "eBook",
                    "price": 49
            
                }
        ],
    }
    
    render() {
        const list = this.state.cart.map(item => {
            return <Product item={item} />
        })
        return (
            <section>
                <Category>
                    {/* <Product item={this.state.cart[0]} /> */}
                </Category>
                <Cart />
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);