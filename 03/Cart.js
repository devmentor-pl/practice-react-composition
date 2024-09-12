import React from 'react';
import Product from './Product';

function Cart(props) {
    const {data, onClick, cartState} = props;
    const order = data.map(
        item => 
            <Product
                content={'remove'}
                key={ data.id }
                item={item}
                onClick={onClick}
                disabled={!cartState.includes(item.id)}
            ></Product>
    )   
    
    return (
        <h2>Cart</h2>,
        <ul>
            {order}
        </ul>
    )
}

export default Cart;