import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';

import data from './data.json';

class App extends React.Component {
    state = {
        product: [],
        cart: []
    }

    componentDidMount() {
        console.log(data)
        this.setState({ product: [...data] });
    }

    addToCart = id => {
        console.log('addToCart', id)
        const addProduct = this.state.product.filter(item => item.id === id)
        console.log( addProduct )
        this.setState({ cart: [...this.state.cart, ...addProduct] });
    }

    removeFromCart = id => {
        console.log('removeFromCart', id)
        const newCart = this.state.cart.filter(item => item.id !== id)
        console.log(newCart)
        this.setState({ cart: newCart});
    }
    
    render() {
        const list = this.state.product.map(item => {
            return <Product 
                    item={item} 
                    isCategory={true} 
                    addToCart={this.addToCart}
                    removeFromCart={this.removeFromCart}
                />
        })
        return (
            <section>
                <Category>
                    {list}
                </Category>
                <Cart>
                    {list}
                </Cart>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);