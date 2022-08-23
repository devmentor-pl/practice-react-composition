import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './Panel';
import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
        products : data
    }
    
    addProduct = product => {
        this.setState(state => {
            product.inCart =  true;
            return { cart : [...state.cart, product] }
        })
    }

    delProduct = product => {
        this.setState(state => {
            const list = state.cart.filter(item => item!==product);
            product.inCart =  false;

            return { cart : list }
        })
    }

    increasePrice = () => {
        this.setState(state => {
            const newProducts = [...state.products];
            newProducts.forEach(product => product.price+=50)
            return { products : newProducts }
        })
    }

    render() {
        return (
            <section>
                <Panel title='Category' data={ this.state.products } clickButton={ this.addProduct } isCart= {false} />
                <Panel title='Cart' data={ this.state.cart } clickButton={ this.delProduct } isCart= {true} />
                <button onClick = { this.increasePrice }> Increase products price +50 PLN (for testing)</button>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);