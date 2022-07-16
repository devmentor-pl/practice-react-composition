import React from 'react';

export default class Product extends React.Component{
   addToBasket = () => {
        this.props.addToCart(this.props.product);
   }

   removeFromBasket = () => {
        this.props.removeFromCart(this.props.product);
   }

    render() {
        if(this.props.isCategory) {
            const isElInCart = this.props.cart.some(el => el.name === this.props.product.name);
            return <li>{this.props.product.name} <button disabled={isElInCart} ref={el => this.butRef = el} onClick={this.addToBasket}>BUY</button></li>
        } else {
            return <li>{this.props.product.name} <button onClick={this.removeFromBasket}>Remove</button></li>
        }   
    }
}

