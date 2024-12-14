import React from 'react';
import Product from './Product';

function Category(props) {
    const { products, onAddToCart, cart } = props;
    const categoryStyle = {
        fontFamily: 'sans-serif',
        backgroundColor: 'lightblue',
        border: '2px solid navy',
        borderRadius: '5px',
        padding: '10px',
        minWidth: '300px',
    };

    const titleStyle = {
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
    };
    return (
        <div style={categoryStyle}>
            <h2 style={titleStyle}>Category</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Product
                            {...product}
                            onAddToCart={onAddToCart}
                            isCategory={true}
                            inCart={cart.some((item) => item.id === product.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Category;