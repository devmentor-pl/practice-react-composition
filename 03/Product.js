import React from 'react';

const Product = props => {
    const {name,price,id} = props.data;
    const {addProduct,removeProduct,textButton,data,isInCart,type} = props;
    console.log(props, 'Product props');
    return (
        <>
            <li>
                <h4>{name}</h4>
                <p>Cena: {price}</p>
                <button onClick={() => handleClick(data)} disabled={isInCart(id) && type==='category' ? true : false}>{textButton}</button>
            </li>
        </>
    )

    function handleClick(data) {
        const {isCart} = props;
        isCart ? removeProduct(data) : addProduct(data)
    }
}

export default Product;