import React from 'react';

export default class Product extends React.Component{
   addToBasket = () => {
        this.props.addToCart(this.props.product.name);
   }

   removeFromBasket = () => {
        this.props.removeFromCart(this.props.product);
   }

    render() {
        if(this.props.isCategory === true) {
            if(this.props.cart.includes(this.props.product.name)) {
                return <li>{this.props.product.name} <button disabled onClick={this.addToBasket}>BUY</button> </li>
            }

            return <li>{this.props.product.name} <button onClick={this.addToBasket}>BUY</button> </li>
        }

        if(this.props.isCart === true) {
            
            return <li>{this.props.product} <button onClick={this.removeFromBasket}>Remove</button> </li>
        }
        
    }
}

