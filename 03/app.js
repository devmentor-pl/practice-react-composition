import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';
import Product from './Product';
// Obie akcje, tj. dodawanie i usuwanie, mają być realizowane na danych w `<App />`, dlatego to tam będziemy musieli zdefiniować odpowiednie metody i przekazać je do odpowiednich 
// komponentów.

class App extends React.Component {
    state = {
        cart: [],
    }

    addTask = (id, name, price, isCart) => {
        const task = {
            id,
            name,
            price,
            isCart
        }
        this.setState(state => {
            return {
                cart: [...state.cart, task]
            };
        })
    }

    deleteTask = (id) => {
        const cart = [...this.state.cart];
        const index = cart.findIndex(item => item.id === id);
        cart.splice(index, 1);
        this.setState({
        cart
        })
    }

    // 
    render() {
    
        console.log(this.state.cart)
        return (
            <section>
                <Category data={data} add={this.addTask} />
                <Cart data={this.state.cart} delete={this.deleteTask}/>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);