import React from 'react';
import Product from './Product';

function Category(props) {
    const { items, add } = props;
    const list = items.map((el) => {
        return (
            <Product item={el} add={add} key={el.id} />
        )
    })

    return (
        <section>
            <h2>Category</h2>
            <ul>
                {list}
            </ul>
        </section>
    )
}

export default Category;