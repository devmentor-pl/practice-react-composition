import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';
import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
        category: data,
    };

    addToBasket = product => {
        const addedProduct = { ...product, isAdded: true };
        this.setState(prevState => ({
            category: this.setCategoryState(prevState, product, true),
            cart: [...prevState.cart, addedProduct],
        }));
    };

    removeFromBasket = product => {
        this.setState(prevState => ({
            category: this.setCategoryState(prevState, product, false),
            cart: prevState.cart.filter(obj => obj.id !== product.id),
        }));
    };

    render() {
        const cartProductList = this.getProductList(true);
        const categoryProductList = this.getProductList(false);

        return (
            <section>
                <Category>
                    {categoryProductList}
                </Category>
                <Cart>
                    {cartProductList}
                </Cart>
            </section>
        );
    };

    setCategoryState(prevState, product, isAddedValue) {
        return prevState.category.map(obj => (obj.id === product.id) ? { ...obj, isAdded: isAddedValue } : obj);
    };

    getProductList(isCart) {
        const products = isCart ? this.state.cart : this.state.category;
        return products.map((item, index) => this.renderProduct(isCart, item, index));
    };

    renderProduct(isCart, item, index) {
        return (
            <Product
                product={item}
                onClick={isCart ? this.removeFromBasket : this.addToBasket}
                isCart={isCart}
                key={index}
            />
        );
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);