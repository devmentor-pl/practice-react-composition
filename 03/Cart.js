import React from 'react';

function Cart(props) {
    return (
       <div>
            <h2>Cart</h2>
            <ul>
                { props.children }
            </ul>
       </div>
    )
}

export default Cart;