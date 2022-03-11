import React from 'react';

const Product = props => {
    const {name,price,id} = props.data;
    const {addProduct,removeProduct,textButton,data,isInCart} = props;
    return (
        <>
            <li>
                <h4>{name}</h4>
                <p>Cena: {price}</p>
                <button onClick={() => handleClick(data)} disabled={disable(id)}>{textButton}</button>
            </li>
        </>
    )

    function handleClick(data) {
        const {isCart} = props;
        isCart ? removeProduct(data) : addProduct(data)
    }

    function disable(id){
        console.log(id);
    }
}

export default Product;