import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';
import Items from './Items';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    addItem =(id) => {
        const product = data.find(item => item.id ===id);
        if(product) {
            this.setState({
                cart: [...this.state.cart,product]
            })
        }
    }

    inCart =(id) => {
        return !!this.state.cart.find(item => item.id ===id)
    }
    
    render() {
        const {cart} = this.state;

        return (
            <section>
                <Category>
                    {/*data.map(item => <li key = {item.id}>{item.name} {(item.price)}<button>Kup Teraz</button></li> )*/}
                    {data.map(item => <Items inCart={this.inCart(item.id)} key={item.id} data = {item} clickHandle={this.addItem}/>)}
                </Category>
                <Cart>
                    {cart.map(item => <Items key={item.id} data = {item}/>)}
                </Cart>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
