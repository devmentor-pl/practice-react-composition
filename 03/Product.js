import React from 'react';

const Product = (props) => {
    const {name ,isCategory ,add, remove, price, prod} = props;
    
    const filterData = () => {
        if(isCategory) {
            return (
                <p>
                    <button onClick={() => add(prod)} disabled={prod.isCart ? true : false}>Add</button>
                </p>
            )
        }
        return (
            <p>
                <button onClick={() => remove(prod)}>Remove</button>
            </p>
        )
    }

    return (
        <li>
            <p>{name}: <strong>{price} zł</strong></p>
            {filterData()}
        </li>
    )
}


export default Product;