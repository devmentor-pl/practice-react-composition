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

    add = product => {
        product.isCart = true;
        this.setState({cart: [...this.state.cart, product]})
    }

    remove = product => {
        product.isCart = false;
        const updatedCart = this.state.cart.filter(cartProd => cartProd.id !== product.id);
        this.setState({ cart: updatedCart })
    }
    
    render() {
        const productsList = data.map((product) => {
          return (
            <Product
                add={() => this.add(product)}
                item={product}
                key={product.id}
                isCategory={true}
            />
          );
        });
    
        const cartList = this.state.cart.map((product) => {
          return (
            <Product
                remove={() => this.remove(product)}
                item={product}
                key={product.id}
                isCart={true}
            />
          );
        });
    
        return (
          <section>
            <Category>{productsList}</Category>
            <Cart>{cartList}</Cart>
          </section>
        );
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);