import React from 'react';
import ReactDOM from 'react-dom';
import {v4 as uuid} from 'uuid';

import Category from './Category';
import Product from './Product';
import Cart from './Cart';
import Button from './Button';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    handleClick = e =>{
        e.preventDefault();
        
        const buttonName = e.target.className;
        const productItem = e.target.parentElement;
        const productID = productItem.dataset.id;

        if(buttonName.includes('add')){
            this.addToCart(productID);
        } else {
            this.deleteFromCart(productID);
        }
        
    }

    addToCart(id){
        const [cartItem] = data.filter(item => item.id == id);

        this.setState(state =>{
            return {
                cart: [...state.cart, cartItem],
            }
        });
    }

    deleteFromCart(id){
        this.setState(state=>{
            const newCart = state.cart.filter(item => item.id != id);

            return {
                cart : newCart,
            }
        });
    }

    isProductInCart(id){
        const {cart} = this.state;
       
        return cart.some(item=> item.id === id);   
    }

    render() {
        const {cart} = this.state;

        const productList = data.map(product => {
            const {id,name,price} = product;
            const isCategory = this.isProductInCart(id);
            
            return (
                <Product key={uuid()} id= {id} name= {name} price= {price} >
                    <Button onClick={ this.handleClick } label={'Add to Cart'} isCategory={isCategory} className={'add-btn'}/>
                </Product>
            )
        });

        const cartList = cart.map(item => {
            const {id,name,price} = item;
            return (
                <Product key={uuid()} id= {id} name= {name} price= {price} >
                    <Button onClick={ this.handleClick } label={'Delete from Cart'} className={'delete-btn'}/>
                </Product>
            )
        });

        return (
            <section>
                <Category>
                    {productList}
                </Category>
                <Cart >
                    {cartList}
                </Cart>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);