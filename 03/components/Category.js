import React from 'react';
import Product from './Product';

function Category(props) {
    const {data, cart, addItem} = props;

    function handleAction(id) {
        addItem(id);
    }

    return ( 
        <section>
            <h2>Category</h2>
            {data.map(item => <Product key={item.id} item={item} buttonText='buy' handleClick={handleAction} buttonStatus={cart.includes(item.id)}/>)}
        </section>
    )
}

export default Category;