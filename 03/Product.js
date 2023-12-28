import React from "react";

function Product({ product, onActionClick, isDisabled, isInCart }) {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>Cena: {product.price}</p>
            <button onClick={onActionClick} disabled={isDisabled}>
                {isInCart ? "Usuń z koszyka" : "Dodaj do koszyka"}
            </button>
        </div>
    );
}

export default Product;