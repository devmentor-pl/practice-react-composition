import React from 'react';

function Product(props) {
    const {content, item, onClick, disabled} = props;

    return (
        <li>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button
                content={content}
                data={item}
                onClick={onClick}
                disabled={disabled}
            ></button>
        </li>
    )
}

export default Product;