import React from 'react';
import Product from './Product';
import {v4 as uuid} from 'uuid';

function Category(props) {
    const {data, cart, addItem} = props;

    function handleAction(id, item) {
        addItem(id, item);
    }

    return ( 
        <section>
            <h2>Category</h2>
            {data.map(item => <Product key={uuid()} item={item} buttonText='buy' handleClick={handleAction} buttonStatus={cart.includes(item.id)}/>)}
        </section>
    )
}

export default Category;