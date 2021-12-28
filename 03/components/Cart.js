import React from 'react';
import Product from './Product';
import {v4 as uuid} from 'uuid';

function Cart(props) {
    const {data, cart, remove} = props;
    const boughtItems = cart.map(item => data.find(element => element.id === item));

    function removeElement(id, item) {
        remove(id, item);
    }

    if(cart.length > 0){
        return ( 
            <section>
                <h2>Cart</h2>
                {boughtItems.map(item => <Product key={uuid()} item={item} buttonText='remove' handleClick={removeElement}/>)}
            </section>
        )
    }
    return (
        <section>
            <h2>Cart</h2>
            <h4>Nothing add yet</h4>
        </section>
    )
}

export default Cart;