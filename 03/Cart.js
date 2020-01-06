import React from 'react';

function Cart(props) {
    const {children} = props;

    return (
        <div className='cart'>
            <h2>Cart</h2>
            <ul>{children}</ul>
        </div>
    )     
}

export default Cart;