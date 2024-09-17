import React from 'react';
import Product from './Product';

function Category(props) {
    const { children } = props;
    return (
        <section>
            <h2>Produkty w sklepie</h2>
            <div>{children}</div>
        </section>

    )
}

export default Category;