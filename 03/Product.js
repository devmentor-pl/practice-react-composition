import React from 'react';
import {v4 as uuid} from 'uuid';

function Product(props) {
    // console.log(props);
    let {data, isCategory, products, addItem, removeItem} = props;
    const {cart} = products;

    if(isCategory) {
        return data.map(product => {
            return (
                <li key={uuid()} id={product.id}><span>{product.name}</span>:
                    <span>{product.price} PLN</span>
                    <button disabled={!isCategory} onClick={addItem}>Add</button>
                </li>
                )
        });
    }
    return ((products.cart.length > 0) ? cart.map(item => {return(<><li key={uuid()} id={item.id}>{item}<button onClick={removeItem}>Remove</button></li></>)}) : <h2>Nothing add yet</h2>)

    
}

export default Product;