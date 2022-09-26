import React from 'react';
import Product from './Product';

function addNumbers() {
    return 2;
}

function Category(props) {
    const {buttonPress} = props;
    const {data} = props;
    //add('Asia');
    const productsList = data.map(n=> {
        return(<Product isCategory={true} buttonPress={buttonPress} id={n.id} key={n.id} name = {n.name} price = {n.price}/>)
    })

    return (
        <>
            <h2>Category</h2>
            <ul>{productsList}</ul>
        </>
    )
}

export default Category;