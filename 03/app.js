import React from 'react';
import ReactDOM from 'react-dom';
import Category from './Category';
import Cart from './Cart';
import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    addProductToCart = (product) => {
        this.setState({
            cart: [...this.state.cart, {...product, addedToCart: true, disabled: true}]
        })
    }
    showCart = (product) => {
        this.setState({
            cart: [...this.state.cart, {...product}]
        })
    }


    
    render() {
        const {cart} = this.state;
        console.log(cart)
        return (
            <section>
                <Category add={this.addProductToCart} products={data} cart={cart} />
                <Cart cart={cart}  products={data}  show={this.showCart}/>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);