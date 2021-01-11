
import React from 'react';

 function Product({product, isAdded, addToOrder, removedFromOrder}) {

    const {name, price, alreadyAdded = false } = product;
 

    return (
        <div>
            <p>{name} cena: <strong>{price}</strong>zł 
            {isAdded ? (
                <button disabled={alreadyAdded} onClick={() => addToOrder(product)}>Add to order </button>
                ) : (
                <button onClick={() => removedFromOrder(product)}>remove From order</button>
                )
            }
            </p>
        </div>
    )





}

export default Product;