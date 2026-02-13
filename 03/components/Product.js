import React from "react";

const Product = ({product, isCategory, onRemove, inCart}) => {
    return(
        <div className="product">
            <h3 className="product__title">{product.name}</h3>
            <p className="product__price">Cena: {product.price}</p>
            <p className="product__quantity">Dostępna ilość: {product.quantity}</p>

            {isCategory && !inCart && <button  className="product__btn product__btn--add" 

            onClick={() => isCategory(product)}>Dodaj do koszyka</button>}

            {isCategory && inCart && (
                <button className="product__btn product__added">Dodano do koszyka</button>
            )}

            {onRemove && <button className="product__btn product__btn--remove" 

            onClick={() => onRemove(product)}>Usuń z koszyka</button>}
        </div>
    )
}

export default Product