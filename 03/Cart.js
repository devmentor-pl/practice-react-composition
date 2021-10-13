import React from 'react';
import Product from './Product'

function Cart(props) {
    const {items, onClick} = props;

    return (
        <>
            <h2>Cart</h2>
            <ul><Product onClick = {onClick} items ={items} type={'cart'}/></ul>
        </>
    )
}

export default Cart;