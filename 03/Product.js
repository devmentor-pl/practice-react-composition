import React from 'react';

const buttonHandle = (props, e) => {
    e.preventDefault();
    const{buttonPress} = props;
    const {id} = props;
    buttonPress(id);
    console.log(id);
    e.target.disabled = true;
}

function Product(props) {
    const {isCategory} = props;
    let buttonText= '';
    if(isCategory === true){
        buttonText = 'add';
    }
    else{
        buttonText = 'remove';
    }
    

    return(
    <li>name: {props.name}, price: {props.price}
    <button disabled={false} onClick={(e)=>buttonHandle(props, e)}>{buttonText}</button>
    </li>
    )
    
}

export default Product;