import React from 'react';
import Product from './Product'

function Cart(props) {
    const {items, onClick} = props;

    return (
        <>
            <h2>Cart</h2>
            <ul> {
                items.map((item) =>
                {return <Product onClick = {onClick} item ={item} type ={'cart'}/>}) 
            }
            </ul>
        </>
    )
}

export default Cart;