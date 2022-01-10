import React from 'react';
import Product from './Product';

function Cart(props) {

    const {data , cart , onClick} = props;

    const orderList = data.map( item => {
        return cart.map( i => {
            if( i === item.id) {
                return <Product
                    key={ item.id }
                    item={item}
                    onClick={onClick}
                    disabled={ !cart.includes(item.id) }
                    content={'RemoveFromCart'}
                />
            }
        })
    })

    return [
        <h2>Cart</h2>,
        <ul>
            {orderList}
        </ul>
    ]
}


export default Cart;