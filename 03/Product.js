import React from 'react';

function Product(props) {

    const {data, clickHandler, checkCart, isInCart} = props

    function handleClick (id) {
        clickHandler(id)
    }

    return (
        <li>
            {data.name} ({data.price})
           {isInCart ? (
                <button onClick={() => handleClick(data.id)}>remove</button> )
           : (
                <button
                    disabled={checkCart()}
                    onClick={() => handleClick(data.id)}
                    >
                        buy
                    </button>
            )}
        </li>
    )
}

export default Product;




// return (
//     <li>
//         {data.name} ({data.price})
//        {isInCart ?
//             <button onClick={() => handleClick(data.id)}>remove</button>
//        : (
//             <button
//                 disabled={checkCart ? true : false} onClick={() => handleClick(data.id)}>buy</button>)

//         }
//     </li>
// )