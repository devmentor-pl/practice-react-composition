import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }
    createRows(section) {
        return data.map((el => {
            const { id, name, price } = el
            const stateItem = this.state.cart.find((element) => element.id === id)
            return (
                <Product
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    order={
                        stateItem && stateItem.id === id ? 1 : 0
                    }
                    isCategory={
                        section === 'category' ? true : false
                    }
                    isCart={
                        section === 'cart' ? true : false
                    }
                    newOrder={this.newOrder}
                    deleteOrder={this.deleteOrder}
                />
            )
        }))
    }

    newOrder = (itemID) => {
        data.map((el => {
            const { id, name, price } = el

            if (id === itemID) {
                this.setState({
                    cart: [...this.state.cart, el]
                })
            }
        })
        )
    }

    deleteOrder = (itemID) => {
        const newCart = [...this.state.cart]
        const updatedCart = (newCart.filter((element) => element.id !== itemID))
        this.setState({ cart: updatedCart })
    }

    render() {
        return (
            <section>
                <Category />
                {this.createRows('category')}
                <Cart />
                {this.createRows('cart')}
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
