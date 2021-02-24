import React from 'react';

function Cart(props) {
    const {list} = props;
    return (
    <>   
    <h2>Cart</h2>
    <ul>{list}</ul>
    </>
    )
}

export default Cart;