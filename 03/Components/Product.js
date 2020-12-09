import React from 'react';

const Product = props => {
    const { id, name, price, addToBasket, product, removeFromBasket, basketItem } = props;
    return (
        <div style={divStyle}>
            <h3>
                {
                    !basketItem ? `Id: ${id} --- Name: ${name}` : `Name: ${name}`
                }
            </h3>
            <span>Price: {price}</span>

            { !basketItem ?
            (
                <button
                    onClick={ () => addToBasket(product) }
                >
            Add to Basket</button>
            ) : 
            (
                <button
                onClick={ () => removeFromBasket(product.id) }
                >
                Remove from basket</button>
            )
            }
            
        </div>
    )
}

const divStyle = {
    "border": "1px solid navy",
    "margin": "2px"
}

export default Product