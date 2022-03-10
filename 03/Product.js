import React from 'react';

const Product = props => {
    const {name,price,id} = props.data;
    const {addProduct,removeProduct, textButton,data,isCart} = props;
    return (
        <>
            <li>
                <h4>{name}</h4>
                <p>Cena: {price}</p>
                <button onClick={() => handleClick(data)} >{textButton}</button>
            </li>
        </>
    )

    function handleClick(data) {
        const {isCart} = props;
        isCart ? removeProduct(data) : addProduct(data)
    }

    // function handleDisable(id){
    //     const {cart} = props;
    //     console.log(cart);
    //     return cart.map(item => {
    //         if(item.id === id){
    //             return true
    //         }
    //         else false
    //     })
    // }

    // disabled={handleDisable(id)} - to było w button
}

export default Product;