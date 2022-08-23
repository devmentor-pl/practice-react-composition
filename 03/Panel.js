import React from 'react';
import Product from './Product';

function Panel(props) {
    const {data, clickButton, title, isCart} = props;    
    const list = data.map(product => <li key={ product.id }> <Product data={ product } clickButton={ clickButton } isCart={ isCart }/> </li>)

    return (
        <div>
            <h2>{title}</h2>
            <ul>
                { list }
            </ul>
        </div>
    )
}

export default Panel;