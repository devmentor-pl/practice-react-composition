import React from 'react';

function Product(props) {

    
    const { onClick, item, isCart, isCategory } = props
    

    if (isCategory === true) {


        return <><p>{item.name}</p>
            <p >{item.price} zł</p>
            <button onClick={onClick} style={{marginBottom: "2rem"}}>add</button>
        </>

    }

    else if (isCart === true) {


        return <><p >{item.name}</p>
            <p>{item.price } zł</p>
            <button onClick={onClick} style={{marginBottom: "2rem"}}>delete</button>
        </>

    }




}

export default Product