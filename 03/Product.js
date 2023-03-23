import React from 'react';

function Product(props) {
    const { item, click, text, disabled } = props;
    return (
        <div>
            {item.name} - {item.price}PLN
            <button disabled={disabled} onClick={() => click(item)}  >{text}</button>
        </div >
    )
}

export default Product;