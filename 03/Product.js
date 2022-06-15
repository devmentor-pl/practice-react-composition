import React from 'react';

// wyświetla listę produktów wybranych do zakupu. Produkty te są również renderowane przez komponent `<Product />`
// Aby w `<Product />` rozróżnić, które rozwiązanie (dla kategorii czy koszyka) ma być implementowane, można temu komponentowi przekazywać odpowiednie props, np. `<Product 
// isCategory={ true } />` lub `<Product isCart={ true } />`.

function Product(props) {
    const  {name, price, id, isCart, isCategory} = props;

    const liStyles = {
        display: 'flex',
    }


    return (
        <li style ={liStyles}>
            <p>{ name }</p>
            <p>{ price }</p>
            <button disabled={isCategory ? false: true} onClick={() => props.add(id, name, price, isCart)}> Buy </button>
            <button disabled={isCart ? false: true} onClick={() => props.delete(id)}> Delete </button>
        </li>
    )
    
    
}

export default Product;