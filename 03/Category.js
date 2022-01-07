import React from 'react';

function Category(props) {

    console.log(props);

    const list = props.products.map(p => {
        return (
            <li key={p.id}>
                {p.name} {p.price} 
                <button onClick={event => props.add(p)}>buy</button>
            </li>
        );
    });

    return (
        <section>
            <h2>Category</h2>
            <ul>{list}</ul>
        </section>
    );
}

export default Category;