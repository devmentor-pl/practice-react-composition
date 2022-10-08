import React from 'react';

function Cart(props) {
    const { children } = props;
    return (
       <div>
            <h2>Cart</h2>
            { children } 
       </div>
    )
}

export default Cart;