import React from 'react';
import Product from './Product';
// Natomiast w `<Cart />` będzie potrzebny przycisk „usuń z koszyka”.

function Cart(props) {
    
    const { data } = props;
        return ( 
            <ul>
                {data.map(product =>
                <Product key={product.id}
                    name={ product.name }
                    price={ product.price }
                    isCart = {true}
                    delete = {props.delete}
                />)}
            </ul>
         )
    }

export default Cart;
