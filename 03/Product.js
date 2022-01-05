import React from 'react';
import Button from './Button';

function Product(props) {


    const {item , onClick, disabled, content} = props;

    return (
        <li>
            <h3> {item.name} </h3>
            <p> Cena: {item.price} zł</p>
            <Button
                data={item}
                onClick={onClick}
                disabled={disabled}
                content={content}
            />
        </li>
    )
}

export default Product;