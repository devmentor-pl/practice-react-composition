import React from "react";

function Product(props){
    const {product, isCategory, isCart, add, remove} = props;
    console.log(product);
    return(
        <li>
            <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button 
                    disabled={isCart} 
                    onClick={()=> add ? add(product) : remove(product)}>
                    {isCategory ? "Add" : "Remove"}
                </button>
            </div>
        </li>
    )
}
export default Product