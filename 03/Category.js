import React from 'react';
import Product from './Product';
// wyświetla listę dostępnych produktów. Produkty są renderowane dzięki komponentowi `<Product />`
// W `<Category />` mamy mieć możliwość zakupu tego produktu, więc przydałby się przycisk „dodaj do koszyka”. Jeśli ten produkt został już dodany do koszyka, to przycisk powinien 
// być nieaktywny (`disabled`).
// 
function Category(props) {
    const { data } = props;
    return ( 
        <ul>
            {data.map(product =>
            <Product key={product.id}
                name={ product.name }
                price={ product.price }
                isCategory = {true}
                add= {props.add}
            />)}
        </ul>
     )
}

export default Category;










