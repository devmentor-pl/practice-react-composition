import React from 'react';

const Product = (props) => {
    const {item, isCart, isCategory, add, remove} = props;

    const button = () => {
        if (isCategory) {
            return (
                <button 
                    onClick={add} 
                    disabled={item.isCart}>
                        Dodaj do koszyka
                </button>
            )
        } else if (isCart) {
            return <button onClick={remove}>Usuń z koszyka</button>
        }
    }

    return (
        <li>
            <p>
                Nazwa: {item.name}, Cena: {item.price} zł
            </p>
            {button()}
        </li>
    )
}

export default Product