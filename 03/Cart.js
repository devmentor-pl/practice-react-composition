import React from 'react';
import Product from './Product';

function Cart(props) {

    const { cart, onClickDelete } = props

    return (
        <section>
            <h2>Cart</h2>
            <>
                {cart.map((element, index) => {
                    return <Product index={index} onClickDelete={onClickDelete} productName={element.productName} productPrice={element.productPrice} />
                })}
            </>

        </section>
    )
}

export default Cart;