import React from 'react';

function Product(props) {
    const { item, isCategory, addToCart, removeFromCart } = props
    return (
        <div>
            {item.name} - {item.price}{' '}
            {
                isCategory && <button 
                    onClick={() => addToCart(item.id)}
                >Dodaj do koszyka</button>
            }
            {
                isCategory && <button
                    onClick={() => removeFromCart(item.id)}
                >Usuń z koszyka</button>
            }
        </div>
    )
}

export default Product;