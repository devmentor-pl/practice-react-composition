import React from "react";

function Product({ id, price, name, addProduct, removeProduct, cart, isCart, isCategory }) {
    
    const isInCart = cart?.some(item => item.id === id);

    return (
        <li>
            <h2><span>{id}.</span>{name}</h2>
            <span>{price}zł</span>

            {isCategory && (
                <button 
                    disabled={isInCart}
                    onClick={() => addProduct({ id, name, price })}
                >
                    {isInCart ? "Added" : "Add to cart"}
                </button>
            )}

            {isCart && (
                <button 
                    onClick={() => removeProduct(id)}
                >
                    Remove 
                </button>
            )} 
        </li>      
    )
}

export default Product;