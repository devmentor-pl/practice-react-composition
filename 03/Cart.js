import React from 'react';
import Product from './Product';

function Cart(props) {
    console.log(props.items);
    const {buttonPress} = props;
    const cartList = props.items.map(n=> {
        return(<Product buttonPress={buttonPress} isCategory={false} key={n.id} id={n.id} name = {n.name} price = {n.price}/>);
    })
    return (
        <>
            <h2>Cart</h2>
            <ul>{cartList}</ul>
        </>
    )
}

export default Cart;