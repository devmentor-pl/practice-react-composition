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


    addItem = (id) => {
        const product = data.find(item => item.id === id);

        if(product) {
            this.setState({
                cart: [...this.state.cart, product]
            })
        }
    }

    removeItem = (id) => {
        const cart = this.state.cart.filter(item => item.id !== id);
        this.setState(() => ({
            cart
        }))

    }

    inCart = (id) => {
        return !!this.state.cart.find(item => item.id === id)
    }
    
    render() {
        const {cart} = this.state;

        return (
            <section>
                <Category>
                    {data.map(item => {
                        return <Product
                            inCart={this.inCart(item.id)}
                            key={item.id}
                            data={item}    
                            clickHandler={this.addItem}
                        />
                    })}
                </Category>
                <Cart>
                    {cart.map(item => {
                        return <Product 
                            isCart={true} 
                            key={item.id}
                            data={item} 
                            clickHandler={this.removeItem}
                        />
                    })}
                </Cart>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);